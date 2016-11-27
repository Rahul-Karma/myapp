package com.karma.app.example;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class FindDuplicateFromString {

	public static void main(String[] args) {

		String s = "abcbaadchjkl";
		
		Map<Character, Integer> countMap = new HashMap<Character, Integer>();
		
		for(int i=0; i<s.length(); i++) {
			
			if(countMap.get((s.charAt(i))) == null) {
				
				countMap.put((s.charAt(i)), 1);
			} else {
				int v = countMap.get((s.charAt(i)));
				v++;
				countMap.put((s.charAt(i)), v);
			}
		}
		
		Set<Map.Entry<Character, Integer>> entrySet = countMap.entrySet();
		
		for(Map.Entry<Character, Integer> entry : entrySet) {
			if(entry.getValue() > 1) {
				System.out.println("key: "+entry.getKey() + "    value :"+entry.getValue());
			}
		}

	}

}
