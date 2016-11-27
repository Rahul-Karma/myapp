package com.karma.app.example;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class StringAnagramCheck {

	public static void main(String[] args) {

		String s1 = "marz";
		String s2 = "army";
		if(s1.length() == s2.length()) {
			checkAnagram(s1, s2);
		} else {
			System.out.println("No anagram pssible!");
		}
		
		

	}

	private static void checkAnagram(String s, String s2) {
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
		
		Map<Character, Integer> countMap2 = new HashMap<Character, Integer>();
		
		for(int i=0; i<s2.length(); i++) {
			
			if(countMap2.get((s2.charAt(i))) == null) {
				
				countMap2.put((s2.charAt(i)), 1);
			} else {
				int v = countMap2.get((s2.charAt(i)));
				v++;
				countMap2.put((s2.charAt(i)), v);
			}
		}
		
		Set<Map.Entry<Character, Integer>> entrySet2 = countMap2.entrySet();
		int checkCount = 0;
		for(Map.Entry entry : entrySet) {
			for(Map.Entry entry2 : entrySet2) {
				if(entry.getKey() == entry2.getKey() && entry.getValue() != entry2.getValue()) {
					
					checkCount++;
					
				}
			}
		}
		
		if(checkCount > 0) {
			System.out.println("Not anagram");
		}
		else {
			System.out.println("anagram");
		}
			

		
	}

}
