public var Op : AudioClip;


private var mysource:AudioSource;

//static var music:int;

function Start () {

	mysource = gameObject.GetComponent(AudioSource);

		mysource.volume=0.4;
		mysource.PlayOneShot(Op);

}

function Update () {

}