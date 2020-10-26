/* construction et pop des arbres */

class Arbre {
  constructor(nom, ressource, quantitée, durabRessource) {
    this.nom = nom;
    this.ressource = ressource;
    this.quantitée = quantitée;
    this.durabilitée = durabRessource;
  }
  rencontre() {
    function rdmArbre() {
      Math.floor(Math.random() * 3);
      var listArbre = [chêne, bouleau, sapin];
      var choixArbre = listArbre[rdmArbre];
      console.log(choixArbre);
    }

    var affichageArbre = document.querySelectorAll(".arbre").innerHTML;
    console.log(
      `Vous passer devant un ${this.nom} il contient ${this.quantitée} ${this.ressource}`
    );
    var pop = document.querySelector("#arbre3");
    if (pop.classList.contains("caché")) {
      pop.classList.remove("caché");
    } else {
      pop.classList.add("caché");
    }
  }
}

const chêne = new Arbre("chêne", "rondins", 4, 4);
const bouleau = new Arbre("bouleau", "rondins", 6, 6);
const sapin = new Arbre("sapin", "rondins", 8, 8);

/*commande pop arbre à gérer en rdm */
//chêne.rencontre();
//bouleau.rencontre();
//sapin.rencontre();

/*----------------------------*/
/*         Les outils         */

class Outil {
  constructor(nom, matériel, durabOutil) {
    this.nom = nom;
    this.matériel = matériel;
    this.durabilitée = durabOutil;
  }
  équiper() {
    console.log(`${this.nom} équipé.`);
  }
  utiliser(cible) {
    this.cible = cible;
    if (this.quantitée !== 0) { 
    console.log(
      `Vous tapez ${cible.nom} il contient ${cible.quantitée} ${cible.ressource}`
    );
    cible.quantitée = cible.quantitée - 1;
    console.log(`il contient maintenant ${cible.quantitée} ${cible.ressource} `);
    } else {
      console.log("il n'y a plus de ressource")
    }
  }
}

const hacheEnBois = new Outil("hache", "bois", 12);
/*-------------------------------*/
/*    scores et nb ressources    */

var nbBuches = document.getElementById("nbBuches").innerHTML;
console.log(nbBuches);
var newBuches = nbBuches;
function addBuches() {
  console.log("nb=" + nbBuches);
  newBuches = parseInt(newBuches) + 1;
  console.log("nbB= " + newBuches);
  nbBuches = parseInt(newBuches);
  document.getElementById("nbBuches").innerHTML = nbBuches;


}

/*-------------------------------*/
/*Equiper et utiliser outils*/
//hacheEnBois.équiper();
//hacheEnBois.utiliser(chêne);

/*------------------------------*/
/*  Récupération des éléments  */

/*addScore*/

//var score = document.querySelector("#score").innerHTML;
//var newScore = 0;
//function addScore() {
//  newScore = newScore + 1;
//  document.querySelector("#score").innerHTML = newScore;
//  console.log(newScore);
//}

/*-----------------------------*/
//var btnUtiliser = document.querySelector('#btnUtiliser');
//btnUtiliser.addEventListener('onclick', score.innerHTML = `${score} +1`);

//function addScore(amount) {
//    score = score + amount;
//    document.getElementById('score').innerHTML = score;
//    for(i = 0, i < 10, i++;) {
//        amount = amount + i;
//    }
//}

/*------------------------------*/
/*     affichage dans le DOM    */
//btnPopArbre.addEventListener('click', sapin.rencontre());
/*------------------------------*/

//sapin.rencontre();
//hacheEnBois.équiper();
//hacheEnBois.utiliser(sapin);
