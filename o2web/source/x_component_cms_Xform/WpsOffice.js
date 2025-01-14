MWF.xDesktop.requireApp("process.Xform", "WpsOffice", null, false);
MWF.xApplication.cms.Xform.WpsOffice = MWF.CMSWpsOffice =  new Class({
    Extends: MWF.APPWpsOffice,
    initialize: function(node, json, form, options){
        this.node = $(node);
        this.node.store("module", this);
        this.json = json;
        this.form = form;
        this.documentId = "";
        this.mode = "write";

        this.officeType = {
            "docx" : "Writer",
            "doc" : "Writer",
            "xlsx" : "Spreadsheet",
            "xls" : "Spreadsheet",
            "pptx" : "Presentation",
            "ppt" : "Presentation",
            "pdf" : "Pdf"
        };

        this.appToken = "x_cms_assemble_control";
    },
    createUpload : function (){

        this.uploadNode = new Element("div",{"style":"margin:10px;"}).inject(this.node);
        var uploadBtn = new Element("button",{"text":MWF.xApplication.process.Xform.LP.ofdview.upload,"style":"margin-left: 15px; color: rgb(255, 255, 255); cursor: pointer; height: 26px; line-height: 26px; padding: 0px 10px; min-width: 40px; background-color: rgb(74, 144, 226); border: 1px solid rgb(82, 139, 204); border-radius: 15px;"}).inject(this.uploadNode);
        uploadBtn.addEvent("click",function (){
            o2.require("o2.widget.Upload", null, false);
            var upload = new o2.widget.Upload(this.content, {
                "action": o2.Actions.get(this.appToken).action,
                "method": "uploadAttachment",
                "accept" : ".docx,.xlsx,.pptx,.pdf",
                "parameter": {
                    "id" : this.form.businessData.document.id,
                },
                "data":{
                },
                "onCompleted": function(data){
                    o2.Actions.load(this.appToken).FileInfoAction.delete(this.documentId,function( json ){
                    }.bind(this));
                    this.documentId = data.id;

                    this.reload();
                }.bind(this)
            });

            upload.load();
        }.bind(this));

    },
    createDocumentByTemplate : function (callback){

        this.action.CustomAction.getInfo(this.json.template).then(function(json) {
            var data = {
                "fileName": MWF.xApplication.process.Xform.LP.onlyoffice.filetext + "." + json.data.extension,
                "fileType": json.data.extension,
                "appToken" : "x_cms_assemble_control",
                "workId" : this.form.businessData.document.id,
                "site" : "filetext",
                "tempId": this.json.template
            };

            this.action.CustomAction.createForO2(data,
                function( json ){
                    this.documentId = json.data.fileId;
                    this.setData();
                    if (callback) callback();
                }.bind(this),null, false
            );

        }.bind(this))
    },
    createDocument : function (callback){
        var data = {
            "fileName" : MWF.xApplication.process.Xform.LP.onlyoffice.filetext + "." + this.json.officeType,
            "appToken" : "x_cms_assemble_control",
            "workId" : this.form.businessData.document.id,
            "site" : "filetext"
        };
        this.action.CustomAction.createForO2(data,
            function( json ){
                this.documentId = json.data.fileId;
                this.setData();
                if (callback) callback();
            }.bind(this),null, false
        );
    },
    loadDocument: function () {

        o2.Actions.load(this.appToken).FileInfoAction.getOnlineInfo(this.documentId, function( json ){

            this.documentData = json.data;

            this.fileName = this.documentData.name;
            this.extension = this.documentData.extension;

            this.getEditor(function () {
                this.loadApi(function (){
                    this.loadEditor();
                }.bind(this));
            }.bind(this));

        }.bind(this),null,false);

    },
    setData: function() {
        var data = {
            "documentId": this.documentId,
            "appToken": "x_cms_assemble_control"
        };
        this.data = data;
        this._setBusinessData(data);

        var jsonData = {}
        jsonData[this.json.id] = data;

        o2.Actions.load("x_cms_assemble_control").DataAction.updateWithDocument(this.form.businessData.document.id, jsonData, function (json) {
            data = json.data;
        });
    }
});
