
let n = 990;
let cpt = 0;
let duree = 60;
let delta = Math.ceil((duree * 1000) / n);
let node =  document.getElementById("compteur");

function countdown() {
  node.innerHTML = ++cpt;
  if( cpt < n ) {
    setTimeout(countdown, delta);
  }
}

let compteur=document.querySelector('#compteur')

compteur.addEventListener('mouseover', function(){
  setTimeout(countdown, delta);
});
