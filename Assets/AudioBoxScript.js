#pragma strict

public var shagekityou : AudioClip;
public var hittuujou2 : AudioClip;
public var enemyshot : AudioClip;
public var BossDestoroy : AudioClip;
public var powup : AudioClip;
public var yarareta : AudioClip;

private var mysource:AudioSource;

static var die:int;
static var shot:int;
static var bossdeath:int;
static var upef:int;
static var bgmStop:int;


function Start () {

	mysource = gameObject.GetComponent(AudioSource);
	die=0;
	shot=0;
	bossdeath=0;
	upef =0;
	bgmStop=0;
}

function Update () {

	if(die==1){
		mysource.volume=0.2;
		mysource.PlayOneShot(yarareta);
		die=0;
	}
	
	if(shot==1){
		mysource.volume=0.2;
		mysource.PlayOneShot(shagekityou);
		shot=0;
	}
	
	if(bossdeath==1){
		mysource.volume=0.2;
		mysource.PlayOneShot(BossDestoroy);
		bossdeath=0;
	}
	
	if(upef==1){
		mysource.volume=0.2;
		mysource.PlayOneShot(powup);
		upef=0;
	}
	

	/*mysource.volume=0.1;
		mysource.PlayOneShot(Bgm);
		*/
}

function playHit(){
	mysource.volume=0.2;
	mysource.PlayOneShot(hittuujou2);
}

function playEnemyShot(){
	mysource.volume=0.2;
	mysource.PlayOneShot(enemyshot);
}
