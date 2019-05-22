using UnityEngine;
using System.Collections;

public class scriptTexttest : MonoBehaviour 
{
	public GUIText fontTest;
	
	void OnGUI () 
	{
		fontTest.text = "`!£$%^&*()_+`1234567890-=\nqwertyuiop[]asdfghjklzxcvbnm," +
			"./<>?~@:}{/*-\nABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrtsuvwxyz\n1234567890" +
"\nThanks for using fonts from JazzCreates2015©.";
	}	
}