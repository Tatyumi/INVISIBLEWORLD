#pragma strict

var Flag:boolean =false; 
var moveSize =0.06;

function Start () {

	
	
}

function Update () {
	
var cubey:float=GameObject.Find("Cube").GetComponent(Transform).position.y;
	if(cubey>239){
		transform.Translate(0,0,moveSize*-1);
	}

	
	if(cubey>300 && !Flag){
		
		Application.LoadLevel("Title");
		Flag = true;
	}
}