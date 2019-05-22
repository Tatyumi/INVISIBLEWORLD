#pragma strict

private var position : Vector3;

private var screenToWorldPointPosition : Vector3;


function Start () {

}

function Update () {

	position = Input.mousePosition;
	
	position.z = 10f;
	
	screenToWorldPointPosition = Camera.main.ScreenToWorldPoint(position);
	
	gameObject.transform.position = screenToWorldPointPosition;

}