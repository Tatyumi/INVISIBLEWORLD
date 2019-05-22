#pragma strict


public var Bgm : AudioClip;

private var mysource:AudioSource;



function Start () {
	mysource = gameObject.GetComponent(AudioSource);
	
		mysource.volume=0.3;
		mysource.PlayOneShot(Bgm);
		
		
	
}

function Update () {
	


}