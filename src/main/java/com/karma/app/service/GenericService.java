package com.karma.app.service;

import java.util.List;

/**
 * Generic Service
 * @author Rahul MANDHAN
 */
public interface GenericService<E, K> {
    public void saveOrUpdate(E entity);

    public List<E> getAll();

    public E get(K id);

    public void add(E entity);

    public void update(E entity);
    
    public void updateById(K key);

    public void remove(E entity);
    
    public void removeById(K key);
}
