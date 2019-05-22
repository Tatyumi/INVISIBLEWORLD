#pragma strict


public var Bgm : AudioClip;

private var mysource:AudioSource;



function Start () {
	mysource = gameObject.GetComponent(AudioSource);
	
		mysource.volume=0.3;
		mysource.PlayOneShot(Bgm);
		
		
	
}

function Update () {
	
	var mapZ:float=GameObject.Find("Terrain").GetComponent(Transform).position.z;
	
	if(mapZ>-1400){
		mysource.volume -=0.01;
			if(mysource.volume<0){
				mysource.volume=0;
			}
		GameObject.Find("audioBox3").GetComponent(AudioBoxScript3).bgmStart=1;
		//Destroy(this);
	}
}