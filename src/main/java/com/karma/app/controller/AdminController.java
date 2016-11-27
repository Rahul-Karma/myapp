package com.karma.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.karma.app.util.WebAppUtil;
 
@Controller
public class AdminController {
	
    
    @RequestMapping(value = { "/admin/dashboard" }, method = RequestMethod.GET)
    public String contactPage(ModelMap model) {
        model.addAttribute("greeting", "Hi, Welcome to mysite");
        return "dashboard";
    }
 
    @RequestMapping(value = { "/admin/kit-management"}, method = RequestMethod.GET)
    public String homePage(ModelMap model) {
        model.addAttribute("greeting", "Hi, Welcome to mysite");
        return "kit-management";
    }
    
    @RequestMapping(value = { "/admin/resource-management" }, method = RequestMethod.GET)
    public String aboutPage(ModelMap model) {
        model.addAttribute("greeting", "Hi, Welcome to mysite");
        return "resource-management";
    }
    
    @RequestMapping(value = { "/admin/user-management" }, method = RequestMethod.GET)
    public String samplePostPage(ModelMap model) {
        model.addAttribute("greeting", "Hi, Welcome to mysite");
        return "user-management";
    }
    
    @RequestMapping(value = "/admin/user-preferences", method = RequestMethod.GET)
    public String adminPage(ModelMap model) {
        model.addAttribute("user", WebAppUtil.getPrincipal());
        return "user-preferences1";
    }
 
/*    @RequestMapping(value = "/admin/site/manage", method = RequestMethod.GET)
    public String dbaPage(ModelMap model) {
        model.addAttribute("user", WebAppUtil.getPrincipal());
        return "site-list";
    }*/
 
    @RequestMapping(value = "/Access_Denied1", method = RequestMethod.GET)
    public String accessDeniedPage(ModelMap model) {
        model.addAttribute("user", WebAppUtil.getPrincipal());
        return "accessDenied";
    }
 
    @RequestMapping(value = "/login1", method = RequestMethod.GET)
    public String loginPage() {
        return "login";
    }

 

 
 
}
