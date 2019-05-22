#pragma strict
//public var ef : AudioClip;

function Start () {

}

function Update () {
	transform.Translate(transform.forward*0.3);

}

function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag=="Me"){
	GameObject.Find("AudioBox").GetComponent(AudioBoxScript).upef=1;
	GameObject.Find("ReactionLight").GetComponent(ReactionLightScript).Reaction = 1;
	//GameObject.Find("ReactionLight").GetComponent(ReactionLightScript).Reaction = 1;
		//AudioSource.PlayClipAtPoint(ef, transform.position);
		Destroy(gameObject);
	}
	
	if(collision.gameObject.tag=="Enemy"){
		Destroy(gameObject);
	}
}