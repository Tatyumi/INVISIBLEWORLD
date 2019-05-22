#pragma strict

public var bom : AudioClip;
public var dark : AudioClip;

private var mysource:AudioSource;

static var Dark:int;
static var Bom:int;

function Start () {
	mysource = gameObject.GetComponent(AudioSource);
	Bom=0;
	Dark=0;
}

function Update () {

	if(Bom==1){
		mysource.volume=0.4;
		mysource.PlayOneShot(bom);
		Bom=0;
	}
	if(Dark==1){
		mysource.volume=0.8;
		mysource.PlayOneShot(dark);
		Dark=0;
	}
}