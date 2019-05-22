var counter:int = 0;
var activated:int;
//public var hittuujou2 : AudioClip;

function Start () {


}
function Update () {

	vec=transform.position;
	if(vec.z>-140 && vec.z<50 && vec.x < 250 && vec.x > -250){
		if(counter%80==0){
		
		GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playEnemyShot();
			var original:GameObject = GameObject.Find("DarkBallBox");
			Instantiate(original, transform.position, transform.rotation);
		}
		counter++;
	}
	if(vec.z<200 && vec.z>-200 && vec.x < 600 && vec.x > -600){
		activated = 1;
	
	}
	if(activated){
		if(vec.z>200 || vec.z<-200 || vec.x > 600 || vec.x < -600){
			Destroy(gameObject);
		}
	
		}
	if(vec.z<150 && vec.z>-150 && vec.x < 260 && vec.x > -260){
			if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
			GameObject.Find("score").GetComponent(Scorescript).score+=100;
			//GameObject.Find("AudioBox").GetComponent(AudioBoxScript).die=1;
			GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
			Destroy(gameObject);
	}	
	
	}

}
function OnCollisionEnter(collision: Collision){
	
	//GameObject.Find("score").GetComponent(Scorescript).score+=100;
	
	if(collision.gameObject.tag=="MeSphere"){
		
		GameObject.Find("score").GetComponent(Scorescript).score+=100;
		//GameObject.Find("AudioBox").GetComponent(AudioBoxScript).die=1;
		GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
		//AudioSource.PlayClipAtPoint(die, transform.position);
		Destroy(gameObject);
		
	}
}