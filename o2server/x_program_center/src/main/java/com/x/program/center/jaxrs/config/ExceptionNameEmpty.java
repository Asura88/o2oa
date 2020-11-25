package com.x.program.center.jaxrs.config;

import com.x.base.core.project.exception.PromptException;

class ExceptionNameEmpty extends PromptException {

	private static final long serialVersionUID = -3287459468603291619L;

	ExceptionNameEmpty() {
		super("名称不能为空.");
	}
}
