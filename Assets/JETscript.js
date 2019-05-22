var moveSize =300.0;
var rotateSize = 1;
var vec =new Vector3(0,0,0);
static var Death:int;
static var Bomb:int;
var bombKakudai:boolean;



function Start(){
	Bomb = 0;
	Death = 0;
	bombKakudai=true;
}


function Update () {
	var light:Light=GameObject.Find("Spotlight").GetComponent("Light");
	var Bom:Light=GameObject.Find("Bomb light").GetComponent("Light");
	var k =checkKey();
	moveTo(k);
	
	if(Bomb == 1){
		if(bombKakudai){
			Bom.range += (4000-Bom.range)/10.0;
			if(Bom.range>3999){
				bombKakudai=false;
			}
		}else{
			Bom.range += (0-Bom.range)/5.0;
			if(Bom.range<1.0){
				Bom.range = 0;
				Bomb = 0;
				bombKakudai=true;
			}
		}
		
		
		//Bom=GameObject.Find("Bomblight").GetComponent("Light");
		//light.Range += 13;
		
	}
	
	if(k=="bomb" && Bomb==0 && GameObject.Find("Gage").GetComponent(GageScript).myScale.x>0){
		GameObject.Find("Gage").GetComponent(GageScript).myScale.x -=2;
		light.spotAngle -= 20;
		GameObject.Find("AudioBox5").GetComponent(AudioBox5Script).Bom=1;
		Bomb = 1;
	}
	
	if(Death == 1){
	Destroy(this);
	
	}
	
}

function checkKey(){

if(Input.GetKey("b") && Input.GetKey(KeyCode.UpArrow)){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey(KeyCode.DownArrow)){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey(KeyCode.RightArrow)){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey(KeyCode.LeftArrow)){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey("a")){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey("d")){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey("s")){
return "bomb";
}

if(Input.GetKey("b") && Input.GetKey("w")){
return "bomb";
}
if(Input.GetKey(KeyCode.UpArrow) || Input.GetKey("w")){
return "left";
}
if(Input.GetKey(KeyCode.DownArrow)|| Input.GetKey("s")){
return "right";
}

if(Input.GetKey(KeyCode.RightArrow)|| Input.GetKey("d")){
return "up";
}
if(Input.GetKey(KeyCode.LeftArrow)|| Input.GetKey("a")){
return "down";
}
if(Input.GetKey("b")){
return "bomb";
}



//if(Input.GetKey("r")){
	//this.transform.Rotate(new Vector3(0, -5, 0));
//return "L";
//}
//if(Input.GetKey("t")){
	//this.transform.Rotate(new Vector3(0,5, 0));
//return "R";
//}

return null;
}




function moveTo(n){

if (n == "right"){
	transform.Translate(0,0,moveSize);
}
if (n == "left"){
	transform.Translate(0,0,moveSize*-1);
}
if (n == "down"){
	transform.Translate(moveSize,0,0);
}
if (n == "up"){
	transform.Translate(moveSize*-1,0,0);
}
	vec=transform.position;
	if(vec.x>250){
		vec.x=250;
	}
	if(vec.x<-250){
		vec.x=-250;
	}
	if(vec.z>130){
		vec.z=130;
		//どこまで下にいけるか（大きくなるほどいける）
	}
	if(vec.z<-90){
		vec.z=-90;
		//どこまで上にいけるか
	}
	transform.position=vec;
}