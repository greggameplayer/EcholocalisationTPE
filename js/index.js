var aveugle;
var cachalot;
var chauvesouris;
function onStart(){
	aveugle = document.getElementById("aveugle");
	cachalot = document.getElementById("Cachalot");
	chauvesouris = document.getElementById("C-S");
	aveugle.addEventListener("click", onAveugleClick);
	cachalot.addEventListener("click", onCachalotClick);
	chauvesouris.addEventListener("click", onChauvesourisClick);
}
window.addEventListener("load", onStart);


function onAveugleClick(){
	document.location.href="aveugle.html";
}
function onCachalotClick(){
	document.location.href="cachalot.html";
}
function onChauvesourisClick(){
	document.location.href="chauvesouris.html";
}