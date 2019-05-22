#pragma strict

var speed = 3.0;
var vec =new Vector3(0,0,0);
var counter:int = 0;
var activated:int;

function Update () {
var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
	if(mapZ>-2100){
			transform.Translate(transform.forward*0.5 );
	}
		vec=transform.position;
	/*if(vec.z>-140 && vec.z<50){
		if(counter%60==0){
			var original:GameObject = GameObject.Find("EnemyBallbox");
			Instantiate(original, transform.position, transform.rotation);
		}
		counter++;
	}*/
	if(vec.z<150 && vec.z>-150 && vec.x < 260 && vec.x > -260){
			if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
				GameObject.Find("score").GetComponent(Scorescript).score+=100;
				GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
				Destroy(gameObject);
			}
	}
	
	if(vec.z<200 && vec.z>-200 && vec.x < 600 && vec.x > -600){
		activated = 1;
		//if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
			//GameObject.Find("score").GetComponent(Scorescript).score+=100;
			//GameObject.Find("AudioBox").GetComponent(AudioBoxScript).die=1;
			//GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
			//Destroy(gameObject);
		//}
	}
	if(activated){
		if(vec.z>200 || vec.z<-200 || vec.x > 600 || vec.x < -600){
			Destroy(gameObject);
		}
	}


}
/*function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag=="MeSphere"){
		GameObject.Find("score").GetComponent(Scorescript).score+=100;
		Destroy(gameObject);
	}
}*/