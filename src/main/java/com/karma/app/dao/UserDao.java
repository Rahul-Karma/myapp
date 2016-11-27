package com.karma.app.dao;

import com.karma.app.model.User;

public interface UserDao {
 
    User findById(int id);
     
    User findBySSO(String sso);
     
}