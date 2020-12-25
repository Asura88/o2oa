package com.x.portal.assemble.designer.jaxrs.designer;

import com.google.gson.JsonElement;
import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.entity.JpaObject;
import com.x.base.core.entity.enums.DesignerType;
import com.x.base.core.project.bean.WrapCopier;
import com.x.base.core.project.bean.WrapCopierFactory;
import com.x.base.core.project.exception.ExceptionAccessDenied;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.jaxrs.WiDesigner;
import com.x.base.core.project.jaxrs.WrapDesigner;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;
import com.x.base.core.project.tools.ListTools;
import com.x.base.core.project.tools.PropertyTools;
import com.x.portal.assemble.designer.Business;
import com.x.portal.core.entity.Page;
import com.x.portal.core.entity.Portal;
import com.x.portal.core.entity.Script;
import com.x.portal.core.entity.Widget;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

class ActionSearch extends BaseAction {

	private static Logger logger = LoggerFactory.getLogger(ActionSearch.class);

	ActionResult<List<Wo>> execute(EffectivePerson effectivePerson, JsonElement jsonElement) throws Exception {
		if(!effectivePerson.isManager()){
			throw new ExceptionAccessDenied(effectivePerson);
		}
		Wi wi = this.convertToWrapIn(jsonElement, Wi.class);
		logger.info("{}开始内容管理设计搜索，条件：{}", effectivePerson.getDistinguishedName(), wi);
		if(StringUtils.isBlank(wi.getKeyword())){
			throw new ExceptionFieldEmpty("keyword");
		}
		ActionResult<List<Wo>> result = new ActionResult<>();

		List<Wo> resWos = new ArrayList<>();
		List<CompletableFuture<List<Wo>>> list = new ArrayList<>();
		if (wi.getDesignerTypes().isEmpty() || wi.getDesignerTypes().contains(DesignerType.form.toString())){
			list.add(searchPage(wi, wi.getAppIdList()));
		}
		if (wi.getDesignerTypes().isEmpty() || wi.getDesignerTypes().contains(DesignerType.script.toString())){
			list.add(searchScript(wi, wi.getAppIdList()));
		}
		if (wi.getDesignerTypes().isEmpty() || wi.getDesignerTypes().contains(DesignerType.widget.toString())){
			list.add(searchWidget(wi, wi.getAppIdList()));
		}
		for (CompletableFuture<List<Wo>> cf : list){
			if(resWos.size()<50) {
				resWos.addAll(cf.get(60, TimeUnit.SECONDS));
			}
		}
		if (resWos.size()>50){
			resWos = resWos.subList(0, 50);
		}
		result.setData(resWos);
		result.setCount((long)resWos.size());
		return result;
	}

	private CompletableFuture<List<Wo>> searchScript(final Wi wi, final List<String> appIdList) {
		CompletableFuture<List<Wo>> cf = CompletableFuture.supplyAsync(() -> {
			List<Wo> resWos = new ArrayList<>();
			try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
				List<WoScript> woScripts;
				if (ListTools.isEmpty(appIdList)) {
					woScripts = emc.fetchAll(Script.class, WoScript.copier);
				} else {
					woScripts = emc.fetchIn(Script.class, WoScript.copier, Script.portal_FIELDNAME, appIdList);
				}

				for (WoScript woScript : woScripts) {
					Map<String, String> map = PropertyTools.fieldMatchKeyword(WoScript.copier.getCopyFields(), woScript, wi.getKeyword(),
							wi.getCaseSensitive(), wi.getMatchWholeWord(), wi.getMatchRegExp());
					if (!map.isEmpty()) {
						Wo wo = new Wo();
						Portal portal = emc.find(woScript.getPortal(), Portal.class);
						if(portal != null){
							wo.setAppId(portal.getId());
							wo.setAppName(portal.getName());
						}
						wo.setDesignerId(woScript.getId());
						wo.setDesignerName(woScript.getName());
						wo.setDesignerType(DesignerType.script.toString());
						wo.setUpdateTime(woScript.getUpdateTime());
						wo.setPatternList(map);
						resWos.add(wo);
					}
				}
				woScripts.clear();
			}catch (Exception e){
				logger.error(e);
			}
			return resWos;
		});
		return cf;
	}

	private CompletableFuture<List<Wo>> searchPage(final Wi wi, final List<String> appIdList) {
		CompletableFuture<List<Wo>> cf = CompletableFuture.supplyAsync(() -> {
			List<Wo> resWos = new ArrayList<>();
			try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
				Business business = new Business(emc);
				List<String> ids = business.page().listWithPortals(appIdList);
				for (List<String> partIds : ListTools.batch(ids, 100)) {
					List<WoPage> wos = emc.fetchIn(Page.class, WoPage.copier, Page.id_FIELDNAME, partIds);
					for (WoPage wopage : wos) {
						Map<String, String> map = PropertyTools.fieldMatchKeyword(WoPage.copier.getCopyFields(), wopage, wi.getKeyword(),
								wi.getCaseSensitive(), wi.getMatchWholeWord(), wi.getMatchRegExp());
						if (!map.isEmpty()) {
							Wo wo = new Wo();
							Portal portal = emc.find(wopage.getPortal(), Portal.class);
							if(portal != null){
								wo.setAppId(portal.getId());
								wo.setAppName(portal.getName());
							}
							wo.setDesignerId(wopage.getId());
							wo.setDesignerName(wopage.getName());
							wo.setDesignerType(DesignerType.page.toString());
							wo.setUpdateTime(wopage.getUpdateTime());
							wo.setPatternList(map);
							resWos.add(wo);
						}
					}
					wos.clear();
				}

			}catch (Exception e){
				logger.error(e);
			}
			return resWos;
		});
		return cf;
	}

	private CompletableFuture<List<Wo>> searchWidget(final Wi wi, final List<String> appIdList) {
		CompletableFuture<List<Wo>> cf = CompletableFuture.supplyAsync(() -> {
			List<Wo> resWos = new ArrayList<>();
			try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
				Business business = new Business(emc);
				List<String> ids = business.widget().listWithPortals(appIdList);
				for (List<String> partIds : ListTools.batch(ids, 100)) {
					List<WoWidget> wos = emc.fetchIn(Widget.class, WoWidget.copier, WoWidget.id_FIELDNAME, partIds);
					for (WoWidget woWidget : wos) {
						Map<String, String> map = PropertyTools.fieldMatchKeyword(WoWidget.copier.getCopyFields(), woWidget, wi.getKeyword(),
								wi.getCaseSensitive(), wi.getMatchWholeWord(), wi.getMatchRegExp());
						if (!map.isEmpty()) {
							Wo wo = new Wo();
							Portal portal = emc.find(woWidget.getPortal(), Portal.class);
							if(portal != null){
								wo.setAppId(portal.getId());
								wo.setAppName(portal.getName());
							}
							wo.setDesignerId(woWidget.getId());
							wo.setDesignerName(woWidget.getName());
							wo.setDesignerType(DesignerType.widget.toString());
							wo.setUpdateTime(woWidget.getUpdateTime());
							wo.setPatternList(map);
							resWos.add(wo);
						}
					}
					wos.clear();
				}

			}catch (Exception e){
				logger.error(e);
			}
			return resWos;
		});
		return cf;
	}

	public static class Wi extends WiDesigner {

	}

	public static class Wo extends WrapDesigner{

	}

	public static class WoScript extends Script {

		static WrapCopier<Script, WoScript> copier = WrapCopierFactory.wo(Script.class, WoScript.class,
				JpaObject.singularAttributeField(Script.class, true, false),null);

	}

	public static class WoPage extends Page {

		static WrapCopier<Page, WoPage> copier = WrapCopierFactory.wo(Page.class, WoPage.class,
				JpaObject.singularAttributeField(WoPage.class, true, false),null);

	}

	public static class WoWidget extends Widget {

		static WrapCopier<Widget, WoWidget> copier = WrapCopierFactory.wo(Widget.class, WoWidget.class,
				JpaObject.singularAttributeField(WoWidget.class, true, false),null);

	}


}
