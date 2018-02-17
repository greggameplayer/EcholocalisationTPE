var aveugle;
var chauvesouris;
function onStart(){
	aveugle = document.getElementById("aveugle");
	chauvesouris = document.getElementById("C-S");
	aveugle.addEventListener("click", onAveugleClick);
	chauvesouris.addEventListener("click", onChauvesourisClick);
}
window.addEventListener("load", onStart);


function onAveugleClick(){
	document.location.href="aveugle.html";
}
function onChauvesourisClick(){
	document.location.href="chauvesouris.html";
}