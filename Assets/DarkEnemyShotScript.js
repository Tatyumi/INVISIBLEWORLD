var counter:int = 0;
var activated:int;
//public var hittuujou2 : AudioClip;

function Start () {


}
function Update () {

	vec=transform.position;
	if(vec.z>-140 && vec.z<50 && vec.x < 250 && vec.x > -250){
		if(counter%80==0){
		
		GameObject.Find("AudioBox").GetComponent(AudioBoxScript).playEnemyShot();
			var original:GameObject = GameObject.Find("DarkBallBox");
			Instantiate(original, transform.position, transform.rotation);
		}
		counter++;
		}
	}