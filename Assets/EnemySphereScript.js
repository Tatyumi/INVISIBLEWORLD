#pragma strict

var speed = 5.0;
var vec =new Vector3(0,0,0);
var meVec =new Vector3(0,0,0);
var sphereVec =new Vector3(0,0,0);
var speedVec =new Vector3(0,0,0);
function Start () {
	
	meVec=GameObject.Find("Cube").GetComponent(Transform).position;
	sphereVec=transform.position;
	speedVec=meVec-sphereVec;
	speedVec.x=speedVec.x/60;
	speedVec.y=speedVec.y/60;
	speedVec.z=speedVec.z/60;
}

function Update () {

	sphereVec+=speedVec;
	transform.position=sphereVec;
	
	vec=transform.position;
	if(vec.z>200 || vec.z<-200 || vec.x > 600 || vec.x < -600){
		Destroy(gameObject);
	}
		if(vec.z<200 && vec.z>-200 && vec.x < 250 && vec.x > -250){
			if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
			Destroy(gameObject);
		}
	
	}	

}
function OnCollisionEnter(collision: Collision){
//Destroy(gameObject);
	if(collision.gameObject.tag=="MeSphere"){
		Destroy(gameObject);
	}

}