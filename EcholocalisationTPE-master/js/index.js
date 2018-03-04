var aveugle;
var chauvesouris;
var home;
var pulse;


function onAveugleClick(){
	document.location.href="humain.html";
}
function onChauvesourisClick(){
	document.location.href="chauvesouris.html";
}
function onHomeClick(){
	document.location.href="index.html";
}
function onPulseClick(){
	document.location.href="animation/index.html";
}

function onStart(){
	if(document.body.contains(document.getElementById("aveugle")) === true && document.body.contains(document.getElementById("C-S")) === true){
	aveugle = document.getElementById("aveugle");
	chauvesouris = document.getElementById("C-S");
	aveugle.addEventListener("click", onAveugleClick);
	chauvesouris.addEventListener("click", onChauvesourisClick);
	}
	if(document.body.contains(document.getElementById("home")) === true){
	home = document.getElementById("home");
	home.addEventListener("click", onHomeClick);
	}
	if(document.body.contains(document.getElementById("pulse")) === true){
	pulse = document.getElementById("pulse");
	pulse.addEventListener("click", onPulseClick);
	}
}
window.addEventListener("load", onStart);