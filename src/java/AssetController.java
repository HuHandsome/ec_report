package java;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/** 
 * @version 创建时间：2017年1月6日 下午4:59:15 
 * @Description 详情：获取资产情况，包括资产总数、正常资产、问题资产、问题单位
 */
@Controller
@RequestMapping(value="/hello")
public class AssetController {
    @RequestMapping(value="/world",method=RequestMethod.GET)
    public String hello(Model model){
        model.addAttribute("msg", "你好spring mvc");
        return "index";
    }
}
