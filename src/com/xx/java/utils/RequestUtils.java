package com.xx.java.utils;

import java.io.IOException;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.methods.PostMethod;

/**
 * 调用Http接口
 * @author enying.tang
 *
 */
public class RequestUtils {
	
	public static String callHttp(String url, Map<String, String> param) throws HttpException, IOException{
		PostMethod method = new PostMethod(url);  
		method.addRequestHeader("Content-Type","text/html;charset=GBK");
		
		if(param != null){
			for (String key : param.keySet()) {
				method.addParameter(key, param.get(key));
			}
		}
		HttpClient httpClient = new HttpClient();   
		httpClient.executeMethod(method);  
		String resBodyStr = method.getResponseBodyAsString();
		String resBodyStrGBK = new String(resBodyStr.getBytes("ISO-8859-1"), "GB18030");
		
		return resBodyStrGBK;
	}
	
	public static void main(String[] args) throws HttpException, IOException {
		RequestUtils.callHttp("http://www.baidu.com", null);
	}
	
}
