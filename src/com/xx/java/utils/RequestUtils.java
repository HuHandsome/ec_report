package com.xx.java.utils;

import java.io.IOException;

import com.zhy.http.okhttp.OkHttpUtils;
import com.zhy.http.okhttp.callback.StringCallback;

import okhttp3.Call;
import okhttp3.Request;

/**
 * 调用Http接口
 * @author enying.tang
 *
 */
public class RequestUtils {
	
	public static String call(String url, String param) throws IOException{
		String result = null;
		StringCallback callBack = new StringCallback()
        {
			@Override
			public void onError(Call arg0, Exception arg1, int arg2) {
				
			}

			@Override
			public void onResponse(String arg0, int arg1) {
				System.out.println(arg0);
				System.out.println(arg1);
			}
        };
		 OkHttpUtils
		    .post()
		    .url(url)
		    .addParams("username", "hyman")
		    .addParams("password", "123")
		    .build().execute(callBack);
		 return "";
	}
}
