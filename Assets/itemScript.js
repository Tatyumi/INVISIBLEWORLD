#pragma strict

//var drop:boolean;

function Start () {

//drop =false;
}

function Update () {
	var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
		if(mapZ>-2700){
				transform.Translate(transform.forward*1 );

}
}

function OnCollisionExit(collisionInfo : Collision){
	if(collisionInfo.gameObject.tag=="Enemy"){
	
	var original:GameObject = GameObject.Find("Power Up");
			Instantiate(original, transform.position, transform.rotation);
		//drop = true;
	
		//}	
		
		//if(drop){
		
			//Destroy(gameObject);
		
		}
}

