/**
 * 
 */
package com.karma.app.test.util;

/**
 * @author MANDHAN
 *
 */
public class MyTest {
	
	public static void main(String g[]) {
		
		Employee e1 = new Employee(1, "Rahul");
		Employee e2 = new Employee(1, "Rahul");
		/*System.out.println(e1.hashCode());
		System.out.println(e2.hashCode());
		System.out.println(e1 == e2);
		System.out.println(e1.equals(e2));*/
		
		
		
	}

}

class Employee {
	public int id;
	public String name;
	
	public Employee(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public String getName() {
		return name;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + this.id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
