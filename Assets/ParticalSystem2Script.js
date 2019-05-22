#pragma strict

static var ParticleSe:int;
function Start () {

  ParticleSe = 0;

}

function Update () {



if(ParticleSe == 1){
	particleSystem.Play();
	Destroy(this);
	//Application.LoadLevel("Field");
	
	}else{
	
	particleSystem.Stop();
	
	}
}