package com.xx.java.utils;

import java.io.IOException;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;

/**
 * 调用Http接口
 * @author enying.tang
 *
 */
public class RequestUtils {
	
	public static String callHttp(String url, Map<String, String> param) throws HttpException, IOException{
		PostMethod method = new PostMethod(url);  
		method.addRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
		method.getParams().setParameter(HttpMethodParams.HTTP_CONTENT_CHARSET,"utf-8");    

		if(param != null){
			for (String key : param.keySet()) {
				method.addParameter(key, param.get(key));
			}
		}
		HttpClient httpClient = new HttpClient();
		httpClient.getParams().setContentCharset("UTF-8");  
		httpClient.getParams().setParameter(HttpMethodParams.HTTP_CONTENT_CHARSET, "UTF-8");  
		
		httpClient.executeMethod(method);  
		String resBodyStr = method.getResponseBodyAsString();
		return convertUnicode(resBodyStr);
	}
	
	public static void main(String[] args) throws HttpException, IOException {
//		RequestUtils.callHttp("http://www.baidu.com", null);
		String str = "\u6545\u969c\u5a01\u80c1";
		System.out.println(convertUnicode(str));
		System.out.println(new String(str.getBytes("gb2312"), "UTF-8"));
	}
	
	public static String convertUnicode(String ori){
        char aChar;
        int len = ori.length();
        StringBuffer outBuffer = new StringBuffer(len);
        for (int x = 0; x < len;) {
            aChar = ori.charAt(x++);
            if (aChar == '\\') {
                aChar = ori.charAt(x++);
                if (aChar == 'u') {
                    // Read the xxxx
                    int value = 0;
                    for (int i = 0; i < 4; i++) {
                        aChar = ori.charAt(x++);
                        switch (aChar) {
                        case '0':
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '7':
                        case '8':
                        case '9':
                            value = (value << 4) + aChar - '0';
                            break;
                        case 'a':
                        case 'b':
                        case 'c':
                        case 'd':
                        case 'e':
                        case 'f':
                            value = (value << 4) + 10 + aChar - 'a';
                            break;
                        case 'A':
                        case 'B':
                        case 'C':
                        case 'D':
                        case 'E':
                        case 'F':
                            value = (value << 4) + 10 + aChar - 'A';
                            break;
                        default:
                            throw new IllegalArgumentException(
                                    "Malformed   \\uxxxx   encoding.");
                        }
                    }
                    outBuffer.append((char) value);
                } else {
                    if (aChar == 't')
                        aChar = '\t';
                    else if (aChar == 'r')
                        aChar = '\r';
                    else if (aChar == 'n')
                        aChar = '\n';
                    else if (aChar == 'f')
                        aChar = '\f';
                    outBuffer.append(aChar);
                }
            } else
                outBuffer.append(aChar);
 
        }
        return outBuffer.toString();
	}
	
}
