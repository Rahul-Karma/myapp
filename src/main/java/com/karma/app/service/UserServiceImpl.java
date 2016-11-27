package com.karma.app.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.karma.app.dao.UserDao;
import com.karma.app.hibernate.util.HibernateUtil;
import com.karma.app.hibernate.util.User;


 
@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{
 
    @Autowired
    private UserDao dao;
    
    @Autowired
    private SessionFactory sf;
 
    public com.karma.app.model.User findById(int id) {
        return dao.findById(id);
    }
 
    public com.karma.app.model.User findBySso(String sso) {
        return dao.findBySSO(sso);
    }
     
    private static final AtomicLong counter = new AtomicLong();
     
    private static List<User> users;
     
    static{
        users= populateDummyUsers();
    }
 
/*    public List<User> findAllUsers() {
        return users;
    }*/
    
    public List<User> findAllUsers() {
        //SessionFactory sf = HibernateUtil.getSessionFactory();
        Session session = sf.openSession();
     
        List<User> users = session.createQuery("from KarmaUser").list();
        session.close();
        return users;
    }
     
/*    public User findById(long id) {
        for(User user : users){
            if(user.getId() == id){
                return user;
            }
        }
        return null;
    }*/
    
    public User findById(long id) {
    	//SessionFactory sf = HibernateUtil.getSessionFactory();
        Session session = sf.openSession();
 
        User employee = (User) session.get(User.class, id);
        session.close();
        return employee;
    }
     
    public User findByName(String name) {
        for(User user : users){
            if(user.getUsername().equalsIgnoreCase(name)){
                return user;
            }
        }
        return null;
    }
     
    public void saveUser(User user) {
        user.setId(counter.incrementAndGet());
        users.add(user);
    }
    // save user in db using hibernate
    public User save(User user) {
        //SessionFactory sf = HibernateUtil.getSessionFactory();
        Session session = sf.openSession();
        session.beginTransaction();
     
        Long id = (Long) session.save(user);
        user.setId(id);
             
        session.getTransaction().commit();
             
        session.close();
     
        return user;
    }
 
    public void updateUser(User user) {
        int index = users.indexOf(user);
        users.set(index, user);
    }
    
    public User update(User user) {
       // SessionFactory sf = HibernateUtil.getSessionFactory();
        Session session = sf.openSession();
     
        session.beginTransaction();
     
        session.merge(user);
     
        session.getTransaction().commit();
     
        session.close();
        return user;
     
    }
 
    public void deleteUserById(long id) { 
        for (Iterator<User> iterator = users.iterator(); iterator.hasNext(); ) {
            User user = iterator.next();
            if (user.getId() == id) {
                iterator.remove();
            }
        }
    }
    
    public User delete(User user) { 
    	//SessionFactory sf = HibernateUtil.getSessionFactory();
        Session session = sf.openSession();
         
        session.beginTransaction();
         
        session.delete(user);
         
        session.getTransaction().commit();
         
        session.close();
        System.out.println("HI");
        return user;
    }
 
    public boolean isUserExist(User user) {
        return findByName(user.getUsername())!=null;
    }
     
    public void deleteAllUsers(){
        users.clear();
    }
 
    private static List<User> populateDummyUsers(){
        List<User> users = new ArrayList<User>();
        users.add(new User(counter.incrementAndGet(),"Sam", "NY", "sam@abc.com"));
        users.add(new User(counter.incrementAndGet(),"Tomy", "ALBAMA", "tomy@abc.com"));
        users.add(new User(counter.incrementAndGet(),"Kelly", "NEBRASKA", "kelly@abc.com"));
        return users;
    }
 
}