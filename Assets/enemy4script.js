#pragma strict

var vec =new Vector3(0,0,0);
var counter = 25;
var delta = 1;


function Start () {

}

function Update () {
	vec=transform.position;
	if(vec.z<200 && vec.z>-200 && vec.x < 600 && vec.x > -600){	
		if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
			GameObject.Find("score").GetComponent(Scorescript).score+=100;
			//GameObject.Find("AudioBox").GetComponent(AudioBoxScript).die=1;
			GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
			Destroy(gameObject);
		}
	}


	if(counter >= 50){
		delta *=-1;
		counter =0;
	}else{
		counter++;
		}
	transform.Rotate(0,delta,0);
	transform.Translate(transform.forward*0.8);


	}


function OnCollisionEnter(collision: Collision){

if(collision.gameObject.tag=="MeSphere"){
	GameObject.Find("score").GetComponent(Scorescript).score+=100;
	GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
	Destroy(gameObject);
}
}