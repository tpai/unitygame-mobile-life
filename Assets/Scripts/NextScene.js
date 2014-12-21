#pragma strict

import UnityEngine.UI;

var sceneId : int;
var target : int;
var nowClue : int;
private var anim : Animator;
private var timer_anim : Animator;

function Start () {
	anim = GetComponent(Animator);
	timer_anim = GameObject.Find("Timer").GetComponent(Animator);
}

function NextScene (i : int) {
	anim.SetTrigger("reset");
	transform.localScale.x = 0;
	yield WaitForSeconds(.5);

	if(i != 99) {
		timer_anim.SetTrigger("tick");
		GameObject.Find("S"+i).transform.localScale.x = 1;
		GameObject.Find("Timer").transform.localScale.x = 1;
	}
	else {
		timer_anim.SetTrigger("tick");
		GameObject.Find("S99").GetComponent(RectTransform).transform.localPosition.x = 0;
		GameObject.Find("Timer").transform.localScale.x = 0;
	}
}

function FoundClue () {
	nowClue ++;
	if(nowClue == target) {
		anim.SetTrigger("change");
		GameObject.Find("Achievements").SendMessage("Unlock", sceneId);
	}
}