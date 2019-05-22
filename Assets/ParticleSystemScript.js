#pragma strict

static var Particle:int;
function Start () {

  Particle = 0;

}

function Update () {



	if(Particle == 1){
		particleSystem.Play();
		Destroy(this);
		//Application.LoadLevel("Field");
		
	}else{
	
		particleSystem.Stop();
	
	}
}