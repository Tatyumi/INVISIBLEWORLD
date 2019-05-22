#pragma strict
static var life:int;
static var lifeup:int;
static var lifedown:int;
static var DieCount:int;
static var nowDying:int;
static var GameOver:int;
static var GameOverCount:int;
static var Clear:int;
static var ClearCount:int;

var Flag:boolean =false; 

function Awake () {
	DontDestroyOnLoad(this);
}
function Start () {

 	DieCount = 0;
 	nowDying = 0;
	lifeup = 0;
	lifedown = 0;
	GameOver = 0;
	GameOverCount = 0;
	Clear=0;
	ClearCount=0;
	
	
	
	if(life<1){
		life=3;
	} 
}

function Update () {



	if(nowDying){
		DieCount++;
	}
	if(DieCount>250){
		Application.LoadLevel("Field2");
	}
	
	
	if(GameOver){
		GameOverCount++;
	}
	
	if(GameOverCount>230){
		Destroy(this);
		Application.LoadLevel("GameOver");
	}
	
	if(Clear){
		ClearCount++;
	}
	
	if(!Flag && ClearCount>540){
		//Destroy(this);
		Application.LoadLevel("NextStage2");
			Flag = true;
	}
	
	
	this.guiText.text = "LIFE:" + life;
		
	if(life == 0){
		GameOver=1;
		}
		
	if(lifeup == 1){
		life +=1;
		lifeup = 0;
	}

	if(lifedown == 1){
	
		life -= 1;
		lifedown = 0;
	
	}
}