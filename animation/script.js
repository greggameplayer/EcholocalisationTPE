var x = 0.075*document.body.clientWidth,
    y = 0.7*document.body.clientHeight;
document.getElementById('milieu').selectedIndex = 0;
document.getElementById('calcul').innerHTML = "Vitesse du son dans l'air: 340 m.s";
document.getElementById('container').addEventListener("click",deplacement);
function deplacement(event){
  x = event.clientX;
  y = event.clientY;
  document.getElementById('img').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
  document.getElementById('petite').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
  document.getElementById('moyenne').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
  document.getElementById('grande').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
}

document.getElementById('milieu').addEventListener("change",milieu);
function milieu(){
  if(document.getElementById("milieu").options[0].selected == true){
    document.body.style.backgroundImage = "url(air.jpg)";
    document.getElementsByClassName('nombre')[0].style.color = "black";
    document.getElementById('nombre10').style.color = "black";
    document.getElementById('echelle').style.color = "black";
    document.getElementById('echelle').style.borderBottom = "15px solid black";
    document.getElementById('img').setAttribute("src","chauve_souris.png");
    document.getElementById('petite').style.bottom = "";
    document.getElementById('moyenne').style.bottom = "";
    document.getElementById('grande').style.bottom = "";
    document.getElementById('calcul').innerHTML = "Vitesse du son dans l'air: 340 m.s";
  }
  else if(document.getElementById("milieu").options[1].selected == true){
	  document.body.style.backgroundImage = "url(eau.jpg)";
    document.getElementById('img').setAttribute("src","dauphin.png");
    document.getElementById('petite').style.bottom = "10vh";
    document.getElementById('moyenne').style.bottom = "10vh";
    document.getElementById('grande').style.bottom = "10vh";
    document.getElementsByClassName('nombre')[0].style.color = "black";
    document.getElementById('nombre10').style.color = "black";
    document.getElementById('echelle').style.color = "black";
    document.getElementById('echelle').style.borderBottom = "15px solid black";
    document.getElementById('calcul').innerHTML = "Vitesse du son dans l'eau: 1500 m.s";
  }
  else{
    document.getElementsByClassName('nombre')[0].style.color = "white";
    document.getElementById('nombre10').style.color = "white";
    document.getElementById('echelle').style.color = "white";
    document.getElementById('echelle').style.borderBottom = "15px solid white";
	  document.body.style.backgroundImage = "url()";
	  document.body.style.backgroundColor = "black";
  }
}

document.getElementById('calculer').addEventListener("click",calcul);
function calcul(t,v,delai){
  var widthWindow = document.body.clientWidth,
      vw = widthWindow-0.05*widthWindow,
      dPx = vw-(x-0.075*widthWindow+0.15*widthWindow)-0.05*widthWindow,
      d = (vw-(x-0.075*widthWindow+0.15*widthWindow))/(vw/100);
  if(document.getElementById("milieu").options[0].selected == true){
    document.getElementById('petite').style.transition = "1s";
    document.getElementById('moyenne').style.transition = "1s";
    document.getElementById('grande').style.transition = "1s";
    delai = 1000;
    v = 340;
    t = d/v;
  }
  else if(document.getElementById("milieu").options[1].selected == true){
    document.getElementById('petite').style.transition = "0.25s";
    document.getElementById('moyenne').style.transition = "0.25s";
    document.getElementById('grande').style.transition = "0.25s";
    delai = 250;
    v = 1500;
    t = d/v;
  }
  else{
    t = v = 0;
  }
  if(document.getElementById('milieu').options[2].selected == false){
    document.getElementById('petite').style.transitionTimingFunction = "linear";
    document.getElementById('moyenne').style.transitionTimingFunction = "linear";
    document.getElementById('grande').style.transitionTimingFunction = "linear";
    document.getElementById('petite').innerHTML = ")";
    document.getElementById('moyenne').innerHTML = ")";
    document.getElementById('grande').innerHTML = ")";
    document.getElementById('petite').style.display = "inline-block";
    document.getElementById('moyenne').style.display = "inline-block";
    document.getElementById('grande').style.display = "inline-block";
    setTimeout(function(){
      document.getElementById('petite').style.transform = "translate(calc("+x+"px - 7.5vw + "+dPx+"px),calc("+y+"px - 25vh))";
      document.getElementById('moyenne').style.transform = "translate(calc("+x+"px - 7.5vw + "+dPx+"px),calc("+y+"px - 25vh))";
      document.getElementById('grande').style.transform = "translate(calc("+x+"px - 7.5vw + "+dPx+"px),calc("+y+"px - 25vh))";
    }, 100)
    setTimeout(function(){
      document.getElementById('petite').innerHTML = "(";
      document.getElementById('moyenne').innerHTML = "(";
      document.getElementById('grande').innerHTML = "(";
      document.getElementById('petite').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
      document.getElementById('moyenne').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
      document.getElementById('grande').style.transform = "translate(calc("+x+"px - 7.5vw),calc("+y+"px - 25vh))";
      setTimeout(function(){
        document.getElementById('petite').style.display = "none";
        document.getElementById('moyenne').style.display = "none";
        document.getElementById('grande').style.display = "none";
        setTimeout(function(){
          document.getElementById('calcul').innerHTML = "d = t*v ≈ "+t+" s*"+v+" m.s ≈ "+d+" m";
        }, 100)
      }, delai+100)
    }, delai)
  }
  else{
    document.getElementById('calcul').innerHTML = "Propagation du son impossible dans le vide car le son nécessite un milieu !";
  }
}
