#pragma strict


var moveSize =0.06;
var count :int;

function Start () {
	count =0;
	
	
}

function Update () {
	count ++;
	
	transform.Translate(0,0,moveSize*-1);
	
	if(count>360){
		//Destroy(this);
		Application.LoadLevel("Field3");
	}
	
}