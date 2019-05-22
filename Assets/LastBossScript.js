var vec = new Vector3(0,0,0);
var initialvec = new Vector3(0,0,0);
var stopPos = new Vector3(0,0,0);
var radian:float;
var hp:float;
var counter:int =0;
var mat : Material;
var Flag:boolean;
static var action:int;


function Start () {
	radian = 0;
	hp = 80;
	action = 0;
	initialvec = transform.position;
	Flag = false;
	//mat.SetColor("_Color",Color.blue);
}

function Update () {
	var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
	if(mapZ>-1350){
 		//if(action){
			if(counter%60==0){
				var tempvec = new Vector3(26,-19,-65);
		    	GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playEnemyShot();
				var original:GameObject = GameObject.Find("EnemyBallbox");
				Instantiate(original, tempvec, transform.rotation);
			}
			counter++;
	//}
	}
}


		

function OnCollisionEnter(collision: Collision){
//Destroy(gameObject);
	if(collision.gameObject.tag=="MeSphere"){
		//Destroy(gameObject);
		GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
		hp -= 1;
	}
		if(!Flag && hp == 0){
			GameObject.Find("score").GetComponent(Scorescript).score+=100000;		
			GameObject.Find("AudioBox").GetComponent(AudioBoxScript).bossdeath=1;	
			GameObject.Find("audioBox3").GetComponent(AudioBoxScript3).bgmStop=1;
			GameObject.Find("Particle System5").GetComponent(ParticalSystem5Script).ParticleSe = 1;
	 		GameObject.Find("life").GetComponent(LIFEScript).Clear = 1;
			Flag = true;	
			Destroy(gameObject);
				
	 	
	}

}
