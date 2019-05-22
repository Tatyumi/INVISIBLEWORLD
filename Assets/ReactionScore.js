#pragma strict

static var Reaction:int;
function Start () {
 Reaction = 0;

}

function Update () {



	if(Reaction == 1){
		particleSystem.Play();
		
		//Application.LoadLevel("Field");
		 Reaction = 0;
		 //Destroy(this);
	}else{
	
		particleSystem.Stop();
	
	}
}