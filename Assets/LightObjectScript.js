#pragma strict
#pragma downcast
var planePos =new Vector3(0,0,0);
var initiateRotation;
var initiatePos;
function Start () {
	initiateRotation=this.transform.rotation;
	initiatePos=this.transform.localPosition;
}

function Update () {
	
	
	planePos=GameObject.Find("f16a").transform.position;
	checkKey();
}
function checkKey(){

	if(Input.GetKey("r") || Input.GetKey("o")){
		this.transform.RotateAround(planePos,new Vector3(0, -30, 0),1);
	}
	if(Input.GetKey("t") || Input.GetKey("p")){
		this.transform.RotateAround(planePos,new Vector3(0, 30, 0),1);
	}
//同時押しすると元の位置に戻る

	if(Input.GetKey("r") && Input.GetKey("t")){
		this.transform.rotation = initiateRotation;
		this.transform.localPosition = initiatePos;
	}
	if(Input.GetKey("o") && Input.GetKey("p")){
		this.transform.rotation = initiateRotation;
		this.transform.localPosition = initiatePos;
	}


}

