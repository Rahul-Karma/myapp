package com.karma.app.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 * @author Rahul MANDHAN
 *
 */

@Entity
@Table(name="site")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Site extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="name")
	private String name;
	
	@Column(name="owner_email")
	private int userId;

	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	@Column(name="url")
	private String url;
	
	@Column(name="description")
	private String description;
	
	@Column(name="type")
	private int type;
	
	@Column(name="pages_ids")
	private String pages;
	
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPages() {
		return pages;
	}
	public void setPages(String pages) {
		this.pages = pages;
	}
	
}
