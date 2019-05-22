#pragma strict

var vec =new Vector3(0,0,0);

function Start () {

}

function Update () {
				
	transform.Translate(-2*transform.forward
						+transform.right*2 );
	
	vec=transform.position;
	if(vec.z<-150){
	
	//var t:TextMesh=GameObject.Find("New Text").GetComponent(TextMesh);
	//t.text="TerrinZ:"+
	
	//mapzにゲームオブジェクトであるフィールドzの位置を代入して、もしその値が・・・
	//var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
	//if(mapZ>-1500){
	
	//}
		Destroy(gameObject);
}
}

function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag=="Enemy"){
		Destroy(gameObject);
	}
}