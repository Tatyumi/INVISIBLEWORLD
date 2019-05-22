#pragma strict

function Start () {

}

function Update () {
	transform.Translate(transform.forward*0.2);

}

function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag=="Me"){
	GameObject.Find("score").GetComponent(Scorescript).score+=1000;
	GameObject.Find("AudioBox").GetComponent(AudioBoxScript).upef=1;
	GameObject.Find("ReactionScore").GetComponent(ReactionScore).Reaction = 1;
		Destroy(gameObject);
	}
	
	if(collision.gameObject.tag=="Enemy"){
		Destroy(gameObject);
	}
}