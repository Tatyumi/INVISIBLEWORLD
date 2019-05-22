

static var mode:int=0;
var myPos =new Vector3(0,0,0);
var ball : Transform;
var n : int = 0;
static var radian:float =-1*Mathf.PI/2.0;
var planePos =new Vector3(0,0,0);
var Des :int;

public var shagekishot : AudioClip;
private var mysource:AudioSource;

function Start (){
	Des =0 ;
	 radian =-1*Mathf.PI/2.0;
	 mysource = gameObject.GetComponent(AudioSource);
}
	
		
				
function Update () {
	
	planePos=GameObject.Find("Cube").transform.position;
	checkKey();
	if(Input.GetButtonUp("Jump")){
			//AudioSource.PlayClipAtPoint(shagekishot, transform.position);
		//mysource.PlayOneShot(shagekishot);
			//this.AudioSource.Play();
			GameObject.Find("AudioBox").GetComponent(AudioBoxScript).shot=1;
		switch(mode){
			case 0:
				
				Instantiate(ball, planePos, transform.rotation);
				break;
			case 1:
				myPos.x+=15;
				Instantiate(ball, planePos, transform.rotation);
				myPos.x-=30;
				Instantiate(ball, planePos, transform.rotation);
				break;
			case 2:
				myPos.x+=30;
				Instantiate(ball, planePos, transform.rotation);
				myPos.x-=15;
				Instantiate(ball, planePos, transform.rotation);
				myPos.x-=15;
				Instantiate(ball, planePos, transform.rotation);
				myPos.x-=15;
				Instantiate(ball, planePos, transform.rotation);
				myPos.x-=15;
				Instantiate(ball, planePos, transform.rotation);
				break;
		}
		n++;
	}
	
	if(Des){
	Destroy(this);
	}
}
function checkKey(){

	if(Input.GetKey("r")|| Input.GetKey("o")){
		radian+=Mathf.PI/180;
	}
	if(Input.GetKey("t")|| Input.GetKey("p")){
		radian-=Mathf.PI/180;
	}

//同時押しすると元の位置に戻る
	if(Input.GetKey("r") && Input.GetKey("t")){
		radian=-1*Mathf.PI/2.0;
	}

	if(Input.GetKey("o") &&  Input.GetKey("p")){
		radian=-1*Mathf.PI/2.0;
	}	


	myPos.x=Mathf.Cos(radian)*20+planePos.x;
	myPos.z=Mathf.Sin(radian)*20+planePos.z;
	myPos.y=planePos.y;
	this.transform.position=myPos;

}