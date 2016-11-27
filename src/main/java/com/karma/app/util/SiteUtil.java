package com.karma.app.util;

import org.springframework.beans.BeanUtils;

import com.karma.app.bean.SiteBean;
import com.karma.app.model.Site;

public class SiteUtil {
	
	public static Site convertToEntity(SiteBean siteBean) {
		
		Site site = new Site();
		BeanUtils.copyProperties(siteBean, site);
		return site;
		
	}
	
	public static SiteBean convertToBean(Site site) {
		
		SiteBean siteBean = new SiteBean();
		BeanUtils.copyProperties(site, siteBean);
		return siteBean;
		
	}


}
