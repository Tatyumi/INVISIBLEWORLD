#pragma strict

	var cube : Transform;
	var n : int = 0;
	var vec =new Vector3(0,0,0);
	
function Start () {
		
	
}

function Update () {
	vec=transform.position;
	if(vec.z>-180 && vec.z<130 && vec.x>-470 && vec.x<470){
	if(Time.frameCount % 5 == 0){
	Instantiate(cube, transform.position, transform.rotation);
}
}
}