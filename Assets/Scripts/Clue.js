#pragma strict

var found : boolean = false;

function OnMouseDown () {
	if(!found) {
		found = true;
		transform.parent.SendMessage("FoundClue");
		GetComponent.<AudioSource>().Play();
	}
}

function ResetClue () {
	found = false;
}