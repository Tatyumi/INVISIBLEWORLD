#pragma strict


public var EndBgm : AudioClip;

private var mysource:AudioSource;



function Start () {
	mysource = gameObject.GetComponent(AudioSource);
	
		mysource.volume=0.3;
		mysource.PlayOneShot(EndBgm);
		
		
	
}

function Update () {
	
var cubeZ:float=GameObject.Find("Cube").GetComponent(Transform).position.y;
	if(cubeZ>240){
				mysource.volume -=0.001;
	}

}