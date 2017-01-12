package com.xx.java.Controoler;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.httpclient.HttpException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xx.java.utils.RequestUtils;

/**
 * @version 创建时间：2017年1月6日 下午4:59:15
 * @Description 详情：获取资产情况，包括资产总数、正常资产、问题资产、问题单位
 */
@Controller
@RequestMapping(value = "/asset")
public class AssetController {
	@Value("${service.path}")
	String path = "";

	@RequestMapping("/index")
	public String hello(Model model) {
		return "index";
	}
	
	@RequestMapping("/query")
	@ResponseBody
	public String query(HttpServletRequest request) throws HttpException, IOException{
		Map<String, String> param = new HashMap<String, String>();
		Enumeration<String> paras = request.getParameterNames();
		while (paras.hasMoreElements()) {
			String key = paras.nextElement();
			param.put(key, request.getParameter(key));
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
}
