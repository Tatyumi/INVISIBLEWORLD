#pragma strict

static var ParticleAc:int;
function Start () {

  ParticleAc = 0;

}

function Update () {



if(ParticleAc == 1){
	particleSystem.Play();
	Destroy(this);
	//Application.LoadLevel("Field");
	
	}else{
	
	particleSystem.Stop();
	
	}
}