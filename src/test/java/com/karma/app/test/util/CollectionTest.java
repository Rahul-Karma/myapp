package com.karma.app.test.util;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

public class CollectionTest {
	
	public static void main(String g[]) {
		List<String> list = new LinkedList<String>();
		list.add("Rahul");
		list.add("Mohan");
		list.add("Shivam");
		list.add("Meghraj Singh");
		Collections.sort(list);
		ListIterator<String> itr = list.listIterator();
		
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
	}

}
