#pragma strict

function Start () {

}

function Update () {
	checkClick();
}
function checkClick(){
if(Input.GetMouseButtonDown(0)){
Application.LoadLevel("Title");
}
}
