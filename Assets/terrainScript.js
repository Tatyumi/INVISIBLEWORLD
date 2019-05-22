#pragma strict

var vec =new Vector3(0,0,0);

function Start () {

}

function Update () {

	transform.Translate(transform.forward*0.7 );
	vec=transform.position;
	if(vec.z>-330){
		vec.z=-330;
		transform.position=vec;
	//transform.Translate(transform.forward*0 );
	
	}
}
