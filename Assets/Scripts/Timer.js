#pragma strict

private var anim : Animator;
var nowScene : int;

function Start () {
	Reset ();
}

function Reset () {
	nowScene = 0;
	anim = GetComponent(Animator);
	anim.ResetTrigger("reset");
}

function TimeOut () {
	if(nowScene < 10) {
		GameObject.Find("S"+nowScene).SendMessage("NextScene", ++nowScene);
		anim.SetTrigger("reset");
	}
	else if(nowScene == 10) {
		GameObject.Find("S"+nowScene).SendMessage("NextScene", 99);
		anim.SetTrigger("reset");
	}
}