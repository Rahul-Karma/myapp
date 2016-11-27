package com.karma.app.dao;

import java.util.List;
/**
 * 
 * @author RAHUL MANDHAN
 *
 * @param <E>
 * @param <K>
 */
public interface GenericDao<E,K> {
    public void add(E entity) ;
    public void saveOrUpdate(E entity) ;
    public void update(E entity) ;
    public void updateById(K key) ;
    public void remove(E entity);
    public void removeById(K key);
    public E find(K key);
    public List<E> getAll() ;
}
