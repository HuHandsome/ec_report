package java;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.squareup.okhttp.Headers;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

/** 
 * @version 创建时间：2017年1月6日 下午4:59:15 
 * @Description 详情：获取资产情况，包括资产总数、正常资产、问题资产、问题单位
 */
@Controller
@RequestMapping
public class AssetController {
	
	@Value("${service.path}")
	String path = "";
	
    @RequestMapping(value="/hello/world",method=RequestMethod.GET)
    public String hello(Model model){
        model.addAttribute("msg", "你好spring mvc");
        return "index";
    }
    /**
     * 接口1
     * 头部基础数据
     * @return
     */
    @ResponseBody
    @RequestMapping("/headData")
    public String headData(){
    	String queryId = "face5001-dd5f-4492-ae64-e08e971bed2d";
    	
    	return "";
    }
    
    public static void main(String[] args) throws IOException {
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("http://www.baidu.com")
                .build();

        Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) {
            throw new IOException("服务器端错误: " + response);
        }

        Headers responseHeaders = response.headers();
        for (int i = 0; i < responseHeaders.size(); i++) {
            System.out.println(responseHeaders.name(i) + ": " + responseHeaders.value(i));
        }

        System.out.println(response.body().string());
       }
    
}
