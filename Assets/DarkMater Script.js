var mySpeed =new Vector3(0,0,0);
var myPosOrigin =new Vector3(0,0,0);
var myScale =new Vector3(0,0,0);
var vec =new Vector3(0,0,0);
var activated:int;
function Start () {
	
	
	//var ball=GameObject.Find("Ballbox").GetComponent("Ballboxscript");
	var ballradian=Ballboxscript.radian;
	var radian=Random.Range(0.0,Mathf.PI*2);
	mySpeed.x=Mathf.Cos(radian)*0.5;
	mySpeed.z=Mathf.Sin(radian)*0.5;
	
	myPosOrigin=transform.position;
	myPosOrigin.y=0.0;
	transform.position=myPosOrigin;
	
	
	
	
	
}

function Update () {
	
	

	//mySpeed分移動
	//transform.Translate(mySpeed);
	//自分の位置を取得
	myPosOrigin=transform.position;
	//判定用の位置へと移動、回転
		//判定用変数に自分の位置を入れる
	var myPosForJudge = new Vector3(myPosOrigin.x,myPosOrigin.y,myPosOrigin.z);
		//平行移動(自機の座標をdarkの座標から引く処理。自機の位置が原点になる)
	var planePos = GameObject.Find("f16a").transform.position;
	myPosForJudge.x -= planePos.x;
	myPosForJudge.z -= planePos.z;
		//回転(原点中心に、つまり自機中心にライトの角度分回転する処理。z軸にライト方向が重なる←これ、x軸に重なるのかも。俺unityの軸がどうなってるか見れないから分からんね）
	var lightRadian = -1*Ballboxscript.radian;
	//この式は覚えるしかない
	var temp:float = myPosForJudge.x * Mathf.Cos(lightRadian) - myPosForJudge.z * Mathf.Sin(lightRadian);
	myPosForJudge.z = myPosForJudge.x * Mathf.Sin(lightRadian) + myPosForJudge.z * Mathf.Cos(lightRadian);
	myPosForJudge.x = temp;
		//光の範囲内にいるか判定
	var light:Light=GameObject.Find("Spotlight").GetComponent("Light");
	
	var lightRadian_round =light.spotAngle/180*Mathf.PI;//ここで光の範囲のラジアン角度を取ってきて欲しい（とりあえず今の固定のラジアン角度を入れてもいい）
	if(Mathf.Tan(lightRadian_round/2.0 )*myPosForJudge.x > Mathf.Abs(myPosForJudge.z)){//範囲内（上でx軸に重なってる場合、左のmyPosForJudge.xと.zが逆になる）
		//ちょっと小さくする（1フレームにどれくらい小さくすべきかは、初期の大きさの数値による、とりあえず0.25減らしてる）
		myScale=transform.localScale;
		myScale.x-=0.3;
		myScale.y-=0.3;
		myScale.z-=0.3;
		transform.localScale=myScale;
	}else{//範囲外
		//特にすることなし
	}

	//自分の大きさが一定以下だったらオブジェクトを消す
	myScale=transform.localScale;
	if(myScale.x<0.1){//どれくらい小さかったら消すかは、初期の大きさの数値による
		
	
		Destroy(gameObject);
		
	}
	vec=transform.position;
	
		/*if(vec.z>350 || vec.z<-350 || vec.x > 470 || vec.x < -470){
			Destroy(gameObject);
		}*/
}
function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag=="MeSphere"){
		myScale.x-=0.3;
		myScale.y-=0.3;
		myScale.z-=0.3;
		
	}
}