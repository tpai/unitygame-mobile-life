#pragma strict

function Start () {
	Screen.SetResolution(270, 480, true, 60);
}

function OnMouseDown () {
	GameObject.Find("Timer").GetComponent(Timer).nowScene = 1;
	transform.parent.SendMessage("FoundClue");
}