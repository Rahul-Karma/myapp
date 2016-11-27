package com.karma.app.test.util;

import static org.junit.Assert.*;

import org.junit.*;

import com.karma.app.bean.SiteBean;
import com.karma.app.model.Site;
import com.karma.app.util.SiteUtil;

public class SiteUtilTest {
	
	@Test
	public void convertToEntity() {
		SiteBean siteBean = new SiteBean();
		siteBean.setName("TestSite");
		siteBean.setDescription("Descripttion");
		Site site = SiteUtil.convertToEntity(siteBean);
		assertEquals(site.getName(), "TestSite");
		assertEquals(site.getDescription(), "Descripttion");
	}

}
