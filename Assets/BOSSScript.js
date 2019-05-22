#pragma strict

var speed = 0.5;
var vec = new Vector3(0,0,0);
var initialvec = new Vector3(0,0,0);
var stopPos = new Vector3(0,0,0);
var stopped:boolean;
var radian:float;
var hp:float;
var counter:int =0;
var mat : Material;


var action =0;

function Start () {
	radian = 0;
	hp = 30;
	initialvec = transform.position;
	stopped = false;
	//mat.SetColor("_Color",Color.blue);
}

function Update () {
	var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
	if(mapZ>-450){
			radian += 0.03;
			var x:float = 120 * Mathf.Sin(radian) + initialvec.x;
			//var x:float = 120 * Mathf.Sin(radian) ;
			vec = transform.position;
			vec.x=x;
			if(stopped){
				vec.z=stopPos.z;
				vec.y=stopPos.y;
			
			}
		transform.position=vec;
		
		
		if(!stopped && mapZ==-330){
			stopped = true;
			stopPos = transform.position;
			
		}
		if(counter%40==0){
			var tempvec = new Vector3(0,0,-150);
		    GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playEnemyShot();
			var original:GameObject = GameObject.Find("EnemyBallbox");
			Instantiate(original, tempvec, transform.rotation);
		}
		counter++;
	}
}


		

function OnCollisionEnter(collision: Collision){
//Destroy(gameObject);
	if(collision.gameObject.tag=="MeSphere"){
		//Destroy(gameObject);
		GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
		hp -= 1;
	}
		if(hp == 0){
			GameObject.Find("score").GetComponent(Scorescript).score+=10000;		
			GameObject.Find("AudioBox").GetComponent(AudioBoxScript).bossdeath=1;	
			GameObject.Find("audioBox3").GetComponent(AudioBoxScript3).bgmStop=1;
			GameObject.Find("Particle System2").GetComponent(ParticalSystem2Script).ParticleSe = 1;
	 		GameObject.Find("life").GetComponent(LIFEScript).Clear = 1;
				Destroy(gameObject);
				
	 	
	}

}
