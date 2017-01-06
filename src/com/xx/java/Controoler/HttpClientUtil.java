package com.xx.java.Controoler;

import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.conn.scheme.PlainSocketFactory;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.scheme.SchemeRegistry;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

public class HttpClientUtil {
    
    // 读取超时
    private final static int SOCKET_TIMEOUT = 60000;
    // 连接超时
    private final static int CONNECTION_TIMEOUT = 10000;
    // 每个HOST的最大连接数量
    private final static int MAX_CONN_PRE_HOST = 200;
    // 连接池的最大连接数
    private final static int MAX_CONN = 500;

    private static HttpParams httpParamsFog;
    private static ClientConnectionManager connectionManager; 
    
    static {
        httpParamsFog = new BasicHttpParams();  
        // 设置连接超时时间  
        HttpConnectionParams.setConnectionTimeout(httpParamsFog, CONNECTION_TIMEOUT); 
        // 设置读取超时时间  
        HttpConnectionParams.setSoTimeout(httpParamsFog, SOCKET_TIMEOUT); 
        
        SchemeRegistry registry = new SchemeRegistry();  
        registry.register(new Scheme("http", 80,PlainSocketFactory.getSocketFactory()));  
        try {
            SSLContext sslcontext = SSLContext.getInstance("TLS");
            sslcontext.init(null, new TrustManager[] { new X509TrustManager() {
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
                public void checkClientTrusted(X509Certificate[] certs,
                        String authType) {
                }
                public void checkServerTrusted(X509Certificate[] certs,
                        String authType) {
                }
            } }, new SecureRandom());
            registry.register(new Scheme("https",443, new SSLSocketFactory(sslcontext,SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER)));  
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        ThreadSafeClientConnManager cm = new ThreadSafeClientConnManager(registry);
         // 设置最大连接数
         cm.setMaxTotal(MAX_CONN);  
         // 设置每个路由最大连接数     
         cm.setDefaultMaxPerRoute(MAX_CONN_PRE_HOST);
    }
    
    /**
     * 获取fogex连接
     * 
     * @return
     */
    public static HttpClient getHttpClient() {  
        HttpClient client = new DefaultHttpClient(connectionManager, httpParamsFog);
        return client;
    } 
    
    /**
    * post taxml请求(订单接口)
    * 
    * @param msgType 接口类型
    * @param xmlString 请求XML
    * @return
    */
    public static String postHttp(String msgType,String xmlString)throws Exception{
        HttpClient client = getHttpClient();
        return postXml(client,"url","Message",xmlString);
    }
    
    //----------------------------------- private method -------------------------------------
    private static String postXml(HttpClient client,String posturl,String paramName,String xmlString) throws Exception{
        String response = "";
        HttpPost post = new HttpPost(posturl);
        HttpEntity httpEntity = null;
        try {
            if(StringUtils.isBlank(paramName)){
                StringEntity requestEntity = new StringEntity(xmlString, "text/xml", HTTP.UTF_8);
                post.setEntity(requestEntity);
            }else {
                List<NameValuePair> params = new ArrayList<NameValuePair>();  
                params.add(new BasicNameValuePair(paramName, xmlString));  
                post.setEntity(new UrlEncodedFormEntity(params, HTTP.UTF_8));
            }
            HttpResponse httpResponse = client.execute(post);
            httpEntity = httpResponse.getEntity();
            if(httpEntity != null){
                response = EntityUtils.toString(httpEntity);
            }
            int statuscode = httpResponse.getStatusLine().getStatusCode();
            if (HttpStatus.SC_OK != statuscode && HttpStatus.SC_CREATED != statuscode) {//返回200和201为成功
                String errMsg = String.format("返回状态statuscode:%s,paramName:%s,response:%s", statuscode, paramName, httpResponse);
                throw new Exception(errMsg);
            }
        } finally{
            if(httpEntity != null){
                httpEntity.getContent().close();
            }
        }
        return response;
    }
}
