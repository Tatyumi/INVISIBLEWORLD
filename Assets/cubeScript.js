#pragma strict
#pragma downcast
//var power:float;
var vec =new Vector3(0,0,0);

var gageScale =new Vector3(0,0,0);


function Start () {
	
	//power = false;
}

function Update (){
	
	var light:Light=GameObject.Find("Spotlight").GetComponent("Light");
	var gageScale=GameObject.Find("Gage").transform.localScale.x;
		//light.spotAngle =90;
	
	if(Time.frameCount % 60 == 0){
		light.spotAngle -= 0.5;
		GameObject.Find("Gage").GetComponent(GageScript).myScale.x -=0.05;
	}
	
	
}


function OnCollisionEnter(collision: Collision){
	var light:Light;
	
	if(collision.gameObject.tag=="EnemySphere" || collision.gameObject.tag=="Enemy" ){
	 	//GameObject.Find("life").GetComponent(LIFEScript).life -= 1;
	
	 	GameObject.Find("Particle System").GetComponent(ParticleSystemScript).Particle = 1;
	 	GameObject.Find("life").GetComponent(LIFEScript).lifedown = 1;
	 	GameObject.Find("life").GetComponent(LIFEScript).nowDying = 1;
	 	//Destroy(this);
	 	GameObject.Find("AudioBox").GetComponent(AudioBoxScript).die=1;
	 	GameObject.Find("f16a").GetComponent(JETscript).Death = 1;
	 	GameObject.Find("Ballbox").GetComponent(Ballboxscript).Des = 1;
	 	light=GameObject.Find("Spotlight").GetComponent("Light");
	 	light.spotAngle -= 180;
	 	GameObject.Find("f16a");
	 	Destroy(this);
	 	
		
	}
	vec=transform.position;
	
	if(collision.gameObject.tag=="PowerUP"){
			light=GameObject.Find("Spotlight").GetComponent("Light");
			light.spotAngle += 10;
			GameObject.Find("Gage").GetComponent(GageScript).myScale.x +=1;
	}
	
		
	
	if(collision.gameObject.tag=="DarkBall"){
			light=GameObject.Find("Spotlight").GetComponent("Light");
			light.spotAngle -= 50;
			GameObject.Find("Gage").GetComponent(GageScript).myScale.x -=5;
	}
	
	//GameObject.Find("Gage").GetComponent("Scale").myScale.x+=10;
	//var original:GameObject = GameObject.Find("BallBox2");
			//Instantiate(original, transform.position, transform.rotation);
		//power = true;
		//GameObject.Find("score").GetComponent(Scorescript).score+=100;
	
	
	
}