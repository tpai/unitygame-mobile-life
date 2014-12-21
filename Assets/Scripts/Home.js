#pragma strict

function OnMouseDown () {
	if(GameObject.Find("Timer").GetComponent(Timer).nowScene != 0) {
		ResetAllScene();
		GameObject.Find("S0").transform.localScale.x = 1;
		GameObject.Find("Timer").transform.localScale.x = 0;
		GameObject.Find("Timer").GetComponent(Timer).Reset();
		var timer_anim : Animator = GameObject.Find("Timer").GetComponent(Animator);
		timer_anim.SetTrigger("reset");
		GameObject.Find("S99").GetComponent(RectTransform).transform.localPosition.x = 1000;
		GameObject.Find("Achievements").GetComponent(Text).text = "";
	}
}

function ResetAllScene () {
	for(var i=0;i<=10;i++) {
		GameObject.Find("S"+i).transform.localScale.x = 0;
		for (var child : Transform in GameObject.Find("S"+i).transform) {
			if(child.tag == "Clue") {
				child.SendMessage("ResetClue");
			}
		}
		GameObject.Find("S"+i).GetComponent(NextScene).nowClue = 0;
		var anim : Animator = GameObject.Find("S"+i).GetComponent(Animator);
		anim.ResetTrigger("reset");
	}
}