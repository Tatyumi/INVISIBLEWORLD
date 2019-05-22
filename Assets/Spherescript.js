#pragma strict

var speed = 5.0;
var vec =new Vector3(0,0,0);
var radian:float;
var radius:float=0;
var speedVec =new Vector3(0,0,0);
var myPos =new Vector3(0,0,0);
var planePos =new Vector3(0,0,0);
var initialPos =new Vector3(0,0,0);
function Start () {
	//以下二つどっちかで動作すると思う
		//1)LightObjectと前方向を一致させる
	//transform.forward=GameObject.Find("LightObject").transform.forward;
		//2)LightObjectの方を向かせる(こっちとりあえずコメントアウト)
	radian=GameObject.Find("Ballbox").GetComponent(Ballboxscript).radian;
	speedVec.x=Mathf.Cos(radian);
	speedVec.z=Mathf.Sin(radian);
	initialPos=transform.position;
	transform.LookAt(GameObject.Find("Ballbox").transform);
}
function checkKey(){
/*
	if(Input.GetKey("r")){
		this.transform.RotateAround(planePos,new Vector3(0, -10, 0),1);
	}
	if(Input.GetKey("t")){
		this.transform.RotateAround(planePos,new Vector3(0, 10, 0),1);
	}
*/

}
function Update () {
	
	//planePos=GameObject.Find("f16a").transform.position;
	//checkKey();
	//もしStartファンクション内で1)を使った場合、LightObjectの初期の向きによっては以下２つのどっちかしかダメかも、2)ならおそらく一つ目でいいはず
	//transform.Translate(speedVec*5.0);
	//transform.Translate(transform.forward*speed);
	//transform.Translate(-1*transform.forward*speed );
	radius+=5;

	planePos=GameObject.Find("Cube").transform.position;
	myPos.x=Mathf.Cos(radian)*radius+initialPos.x;
	myPos.z=Mathf.Sin(radian)*radius+initialPos.z;
	myPos.y=planePos.y;
	this.transform.position=myPos;

	vec=transform.position;
	if(vec.z<-150){
		Destroy(gameObject);
	}

}


function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag=="Enemy"){
		Destroy(gameObject);
	}
	if(collision.gameObject.tag=="DarkMater"){
	//ここで闇に飲まれるような音を鳴らす
	GameObject.Find("AudioBox5").GetComponent(AudioBox5Script).Dark=1;
		Destroy(gameObject);
	}
	
	if(collision.gameObject.tag=="EnemySphere" || collision.gameObject.tag=="DarkBall"){
		GameObject.Find("AudioBox6").GetComponent(AudioBox6Script).Sphe=1;	
	}
	
	
	
}