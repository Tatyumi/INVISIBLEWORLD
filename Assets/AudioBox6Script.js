#pragma strict

public var sphe: AudioClip;
private var mysource:AudioSource;
static var Sphe:int;

function Start () {
	mysource = gameObject.GetComponent(AudioSource);
	Sphe=0;

}

function Update () {
	if(Sphe==1){
		mysource.volume=0.1;
		mysource.PlayOneShot(sphe);
		Sphe=0;
	}
}