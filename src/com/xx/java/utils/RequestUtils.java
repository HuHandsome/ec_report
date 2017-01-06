package com.xx.java.utils;

import java.io.IOException;

import com.squareup.okhttp.Headers;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

/**
 * 调用Http接口
 * @author enying.tang
 *
 */
public class RequestUtils {
	
	public static String call(String url, String param) throws IOException{
		OkHttpClient client = new OkHttpClient();

		Request request = new Request.Builder().url("http://www.baidu.com").build();

		Response response = client.newCall(request).execute();
		if (!response.isSuccessful()) {
			throw new IOException("服务器端错误: " + response);
		}

		Headers responseHeaders = response.headers();
		for (int i = 0; i < responseHeaders.size(); i++) {
			System.out.println(responseHeaders.name(i) + ": " + responseHeaders.value(i));
		}

		System.out.println(response.body().string());
		return response.body().string();
	}
}
