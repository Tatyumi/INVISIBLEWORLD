#pragma strict

var vec =new Vector3(0,0,0);



function Start(){
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
	
	}
	
