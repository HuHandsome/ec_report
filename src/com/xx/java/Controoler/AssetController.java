package com.xx.java.Controoler;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
	public String headData() throws IOException {
		String queryId = "face5001-dd5f-4492-ae64-e08e971bed2d";

		return "";
	}

}
