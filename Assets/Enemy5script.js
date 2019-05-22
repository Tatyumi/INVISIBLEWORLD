#pragma strict

var speed = 0.5;
var vec =new Vector3(0,0,0);
var counter:int =0;
var activated:int;

function Start(){
}


function Update () {

var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
	if(mapZ>-1200){
				transform.Translate(transform.right*-1 );
	}
	
	vec=transform.position;
	/*if(vec.x>-150 && vec.x<150){
		if(counter%60==0){
			var original:GameObject = GameObject.Find("EnemyBallbox");
			Instantiate(original, transform.position, transform.rotation);
		}
		counter++;
	}*/
	if(vec.z<200 && vec.z>-200 && vec.x < 250 && vec.x > -250){
		activated = 1;
		if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
			GameObject.Find("score").GetComponent(Scorescript).score+=100;
			//GameObject.Find("AudioBox").GetComponent(AudioBoxScript).die=1;
			GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
			Destroy(gameObject);
		}
	}
	if(activated){
		if(vec.z>200 || vec.z<-200 || vec.x > 600 || vec.x < -600){
			Destroy(gameObject);
		}
	}
}
function OnCollisionEnter(collision: Collision){
	//score=score+100;
	//GameObject.Find("score").guiText.text="Score:"+score;
	
	if(collision.gameObject.tag=="MeSphere"){
		GameObject.Find("score").GetComponent(Scorescript).score+=100;
		GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
		Destroy(gameObject);
	}
}