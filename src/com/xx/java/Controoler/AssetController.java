package com.xx.java.Controoler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
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

	/**
	 * 接口1 头部基础数据
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/headData")
	public String headData(String tmStart, String tmEnd) throws IOException {
		String queryid = "face5001-dd5f-4492-ae64-e08e971bed2d";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	/**
	 * 接口2
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface2")
	public String intface2(String tmStart, String tmEnd) throws IOException {
		String queryid = "f4449cc4-e9c4-4f14-9a58-c2be3e6a618f";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}

}
