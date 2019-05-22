#pragma strict

static var myScale = new Vector3(0,0,0);

function Start () {
	myScale=transform.localScale;
}

function Update () {

	if(Time.frameCount % 60 == 0){
		if(myScale.x>0){
			myScale.x-=0.1;
		}
		transform.localScale=myScale;	
	}
	
	if(myScale.x<0){
		myScale.x=0;
	}
}