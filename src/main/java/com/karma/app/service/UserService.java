package com.karma.app.service;

import java.util.List;

import com.karma.app.hibernate.util.User;



public interface UserService {
	
	com.karma.app.model.User findById(int id);
    
    com.karma.app.model.User findBySso(String sso);
     
    User findById(long id);
     
    User findByName(String name);
     
    void saveUser(User user);
    
    public User save(User user);
     
    void updateUser(User user);
    
    public User update(User user);
     
    void deleteUserById(long id);
    
    User delete(User user);
 
    List<User> findAllUsers(); 
    
    //public List<User> findAllUsers();
     
    void deleteAllUsers();
     
    public boolean isUserExist(User user);
     
}