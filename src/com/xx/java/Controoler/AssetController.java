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
	@RequestMapping("/intface1")
	public String intface1(String tmStart, String tmEnd) throws IOException {
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
	/**
	 * 接口3
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface3")
	public String intface3(String tmStart, String tmEnd) throws IOException {
		String queryid = "23286c2b-c1ce-46ec-893b-c5232948b29f";
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
	 * 接口4
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface4")
	public String intface4(Integer rowStart, Integer rowSize, String tmStart, String tmEnd) throws IOException {
		String queryid = "f1aa422b-a9b2-4c50-9813-e1c4b4bf429e";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(rowStart == null){
			rowStart = 1;
		}
		if(rowSize == null || rowSize == 0){
			rowSize = 10;
		}
		param.put("start", rowStart + "");
		param.put("length", rowSize + "");
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	
	/**
	 * 接口5
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface5")
	public String intface5(Integer rowStart, Integer rowSize, String tmStart, String tmEnd) throws IOException {
		String queryid = "9add8039-5a09-408f-afa8-44de60919e4d";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(rowStart == null){
			rowStart = 1;
		}
		if(rowSize == null || rowSize == 0){
			rowSize = 10;
		}
		param.put("start", rowStart + "");
		param.put("length", rowSize + "");
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	
	/**
	 * 接口6
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface6")
	public String intface6(Integer cid, Integer rowStart, Integer rowSize, String tmStart, String tmEnd) throws IOException {
		String queryid = "2360c1b2-13f1-4906-aa38-48108c4ccbc8";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(rowStart == null){
			rowStart = 1;
		}
		if(rowSize == null){
			rowSize = 10;
		}
		if(cid != null){
			param.put("cid", cid + "");
		}
		param.put("start", rowStart + "");
		param.put("length", rowSize + "");
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	
	/**
	 * 接口7
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface7")
	public String intface7(Integer rowStart, Integer rowSize, String tmStart, String tmEnd) throws IOException {
		String queryid = "e92ac98f-2e5d-43af-ad6a-4e07ac44fb6e";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(rowStart == null){
			rowStart = 1;
		}
		if(rowSize == null){
			rowSize = 10;
		}
		param.put("start", rowStart + "");
		param.put("length", rowSize + "");
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	
	/**
	 * 接口8
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface8")
	public String intface8(Boolean isExtra, Integer rowStart, Integer rowSize, String tmStart, String tmEnd) throws IOException {
		String queryid = "83897eb4-7b57-432b-a20d-05aa87dc57ef";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(rowStart == null){
			rowStart = 1;
		}
		if(rowSize == null){
			rowSize = 10;
		}
		param.put("qbase64", "kg==");
		if(isExtra == null){
			param.put("extra", "header");
		}else{
			param.put("extra", "body");
		}
		param.put("start", rowStart + "");
		param.put("length", rowSize + "");
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	
	/**
	 * 接口9
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface9")
	public String intface9(Boolean isExtra, Integer rowStart, Integer rowSize, String tmStart, String tmEnd) throws IOException {
		String queryid = "2a72e7d9-4fce-4025-a498-3783d286b15a";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(rowStart == null){
			rowStart = 1;
		}
		if(rowSize == null){
			rowSize = 10;
		}
		if(isExtra == null){
			param.put("extra", "header");
		}else{
			param.put("extra", "body");
		}
		param.put("qbase64", "kg==");
		param.put("start", rowStart + "");
		param.put("length", rowSize + "");
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}
	
	/**
	 * 接口10
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface10")
	public String intface10(String tmStart, String tmEnd) throws IOException {
		String queryid = "6188fd63-edb9-4e98-8ec8-df48871ab248";
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
	 * 接口11
	 * 
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("/intface11")
	public String intface11(Integer cid, String tmStart, String tmEnd) throws IOException {
		String queryid = "023ba092-4170-4c72-a936-e3efb09ebbd4";
		Map<String, String> param = new HashMap<String, String>();
		param.put("queryid", queryid);
		if(StringUtils.isNoneBlank(tmStart) && StringUtils.isNoneBlank(tmEnd)){
			param.put("tmStart", tmStart);
			param.put("tmEnd", tmEnd);
		}
		if(cid != null){
			param.put("cid", cid + "");
		}
		String result = RequestUtils.callHttp(path, param);
		return result;
	}

}
