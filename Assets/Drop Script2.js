#pragma strict

var vec =new Vector3(0,0,0);
function Start () {

}

function Update () {
	vec=transform.position;
			if(vec.z<150 && vec.z>-150 && vec.x < 260 && vec.x > -260){
			if(GameObject.Find("f16a").GetComponent(JETscript).Bomb==1){
				var original:GameObject = GameObject.Find("Power Up2");
			Instantiate(original, transform.position, transform.rotation);
				GameObject.Find("score").GetComponent(Scorescript).score+=100;
				GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playHit();
		Destroy(gameObject);
			
		}
	
	}	
	
}

function OnCollisionEnter(collision: Collision){
	//score=score+100;
	//GameObject.Find("score").guiText.text="Score:"+score;
	
	if(collision.gameObject.tag=="MeSphere"){
		//GameObject.Find("score").GetComponent(Scorescript).score+=100;
		var original:GameObject = GameObject.Find("Power Up2");
			Instantiate(original, transform.position, transform.rotation);

		Destroy(gameObject);
	}
}
