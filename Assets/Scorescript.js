#pragma strict
static var score:int;
//var vec = new Vector3(0,0,0);
static var ReStar:int;
static var Flag:boolean;
 
function Awake () {
	//DontDestroyOnLoad(this);
}


function Start () {
	if(score<0)
		score=0;
		
	ReStar = 0;
	
	if(score>0){
		Flag=true;
	}else{
		Flag = false;
	}
}

function Update () {
	this.guiText.text = "score : " + score;
	
	if(score>10000 && Flag==false){
	//GameObject.Find("life").GetComponent(LIFEScript).lifeup = 1;
	LIFEScript.lifeup = 1;
	
	Flag=true;
	}
	
	if(ReStar){
	
	score =0;
	ReStar=0;
	}
	
	
	if(Application.loadedLevelName =="GameOver"){
		//vec = transform.position;
		//transform.position(0,0,0);
		//Destroy(gameObject);
			if(score >0)
			score=0;
	
	}
	if(Application.loadedLevelName =="Ending"){
		//vec = transform.position;
		//transform.position(0,0,0);
		//Destroy(gameObject);
			if(score >0)
			score=0;
	
	}
	//transform.position=vec;
		
}