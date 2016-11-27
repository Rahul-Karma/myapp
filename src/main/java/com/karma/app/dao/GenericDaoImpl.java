package com.karma.app.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Basic DAO operations dependent with Hibernate's specific classes
 * @see SessionFactory
 * @author Rahul MANDHAN
 */
@SuppressWarnings("unchecked")
@Repository
public abstract class GenericDaoImpl<E, K extends Serializable> implements GenericDao<E, K> {
    @Autowired
    private SessionFactory sessionFactory;

    protected Class<? extends E> daoType;

    /**
     * By defining this class as abstract, we prevent Spring from creating instance of this class
     * If not defined abstract getClass().getGenericSuperClass() would return Object.
     * There would be exception because Object class does not hava constructor with parameters.
     */
    public GenericDaoImpl() {
        Type t = getClass().getGenericSuperclass();
        ParameterizedType pt = (ParameterizedType) t;
        daoType = (Class) pt.getActualTypeArguments()[0];
    }

    protected Session currentSession() {
        return sessionFactory.getCurrentSession();
    }

    
    public void add(E entity) {
        currentSession().save(entity);
    }

    
    public void saveOrUpdate(E entity) {
        currentSession().saveOrUpdate(entity);
    }

    
    public void update(E entity) {
        currentSession().update(entity);
    }
    
    public void updateById(K key) {
        currentSession().update(currentSession().get(daoType, key));
    }

    
    public void remove(E entity) {
        currentSession().delete(entity);
    }
    
    public void removeById(K key) {
        currentSession().delete(currentSession().get(daoType, key));
    }

    
    public E find(K key) {
        return (E) currentSession().get(daoType, key);
    }

    
    public List<E> getAll() {
        return currentSession().createCriteria(daoType).list();
    }
}