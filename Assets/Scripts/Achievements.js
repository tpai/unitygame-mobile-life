#pragma strict

import UnityEngine.UI;

var achs : String [];

function Start () {
	achs = [
		"<> Welcome my LDJAM game.", 
		"<> Pass road safety.", 
		"<> Safe Driver!",
		"<> Hmm, what a good meal.",
		"<> Perfect date!",
		"<> I love you.",
		"<> Catch bus on time.",
		"<> Fell down?",
		"<> Love you, mom and dad.",
		"<> No one's bladder burst.",
		"<> My dear angel!"
	];
}

function Unlock (i : int) {
	GetComponent(Text).text += achs[i]+"\n";
}