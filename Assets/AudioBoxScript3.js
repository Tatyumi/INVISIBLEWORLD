#pragma strict

public var BossBgm : AudioClip;
public var LastBossBgm : AudioClip;

private var mysource:AudioSource;

static var bgmStop:int;
static var bgmStart:int;

var Flag:boolean =false; 

function Start () {
	mysource = gameObject.GetComponent(AudioSource);
	bgmStop=0;
	bgmStart=0;
	

	
		
	
	
}

function Update () {
	
	if(Application.loadedLevelName =="Field"){

		if(!Flag && bgmStart==1){
			mysource.volume=0.2;
			mysource.PlayOneShot(BossBgm);
			//bgmStart=0;
			Flag = true;
		}

		if(bgmStop == 1){
			mysource.volume -=0.01;
			
			}
	}
		if(Application.loadedLevelName =="Field2"){

		if(!Flag && bgmStart==1){
			mysource.volume=0.2;
			mysource.PlayOneShot(BossBgm);
			//bgmStart=0;
			Flag = true;
		}

		if(bgmStop == 2){
			mysource.volume -=0.01;
			
			}
	}
		if(Application.loadedLevelName =="Field3"){

		if(!Flag && bgmStart==1){
			mysource.volume=0.2;
			mysource.PlayOneShot(LastBossBgm);
			//bgmStart=0;
			Flag = true;
		}

		if(bgmStop == 1){
			mysource.volume -=0.01;
			
			}
	}
	
	
	
			}