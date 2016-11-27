package com.karma.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.karma.app.dao.GenericDao;
import com.karma.app.dao.SiteDao;
import com.karma.app.model.Site;

@Service
public class SiteServiceImpl extends GenericServiceImpl<Site, Long> implements SiteService{
    private SiteDao siteDao;
    public SiteServiceImpl(){

    }
    @Autowired
    public SiteServiceImpl(
            @Qualifier("siteDaoImpl") GenericDao<Site, Long> genericDao) {
        super(genericDao);
        this.siteDao = (SiteDao) genericDao;
    }
}
