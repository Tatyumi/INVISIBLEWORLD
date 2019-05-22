#pragma strict


var moveSize =0.06;
var Tcount :int;

function Start () {
	Tcount =0;
	
	
}

function Update () {
	Tcount ++;
	
	transform.Translate(0,0,moveSize*-1);
	
	if(Tcount>360){
		//Destroy(this);
		Application.LoadLevel("Field2");
	}
	
}