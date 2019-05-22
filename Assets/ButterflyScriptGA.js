#pragma strict



var moveSize =0.01;
var Tcount :int;


function Start () {
	Tcount =0;
	
	
}

function Update () {
	Tcount ++;
	
	transform.Translate(0,0,moveSize*-1);
	var light:Light=GameObject. Find("Spotlight").GetComponent("Light") as Light;
		
	if(Time.frameCount % 2 == 0){
		light.spotAngle -= 0.45;
	}
	
	if(Tcount>720){
		
		Application.LoadLevel("Title");
		
	}
}

	function OnCollisionEnter(collision: Collision){
		var light:Light;
		
		
			light.spotAngle -= 10;
	
	
	}
	