package com.karma.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.karma.app.model.Site;
import com.karma.app.service.SiteService;

@Controller
public class SiteController {

 @Autowired
 SiteService siteService;

 //static final Logger logger = Logger.getLogger(SiteController.class);

 /* Submit form in Spring Restful Services */
 @RequestMapping(value="/site/add", method = RequestMethod.POST)
 public String addSite(@ModelAttribute("site") Site site, ModelMap modelMap) {
  try {
   siteService.add(site);
   return "redirect:/admin/site/manage";
  } catch (Exception e) {
   // e.printStackTrace();
   return "redirect:/admin/site/manage";
  }

 }
 
 @RequestMapping(value="/site/add/form")
 public String addSiteForm() {
	 return "site-form";
 }

 /* Ger a single objct in Json form in Spring Rest Services */
 @RequestMapping(value = "/site/{id}", method = RequestMethod.GET)
 public Site getSite(@PathVariable("id") long id) {
  Site site = null;
  try {
   site = siteService.get(id);

  } catch (Exception ex) {
   ex.printStackTrace();
  }
  return site;
 }

 /* Getting List of objects in Json format in Spring Restful Services */
 @RequestMapping(value = {"/site-list","/admin/site/manage"}, method = RequestMethod.GET)
 public String getSites(ModelMap modelMap) {

  List<Site> siteList = null;
  try {
   siteList = siteService.getAll();

  } catch (Exception e) {
   e.printStackTrace();
  }
  modelMap.addAttribute("siteList", siteList);
  
  return "site-list";
 }

 /* Delete an object from DB in Spring Restful Services */
 @RequestMapping(value = "/sites/{id}", method = RequestMethod.DELETE)
 public String deleteSite(@PathVariable("id") long id, ModelMap modelMap) {

  try {
   siteService.removeById(id);
  
  } catch (Exception e) {
   
  }
   return getSites(modelMap);
 }
}
