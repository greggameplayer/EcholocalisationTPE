var aveugle;
var chauvesouris;
var home;



function onAveugleClick(){
	document.location.href="aveugle.html";
}
function onChauvesourisClick(){
	document.location.href="chauvesouris.html";
}
function onHomeClick(){
	document.location.href="index.html";
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
}
window.addEventListener("load", onStart);