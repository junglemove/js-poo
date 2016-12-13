
"use strict"
/* FIRST way  */
const Personne1 = function(nom, prenom){
    this.nom = nom || "Thibaut",
    this.prenom = prenom || "Visticot"
};

Personne1.prototype.getFullName = function(){
    return "FIRST way: " + this.nom + " " + this.prenom;
}

var pers1 = new Personne1();
/*pers1.nom = "Thibaut";
pers1.prenom = "Visticot";*/

console.log(pers1.getFullName());

/* SECOND way  */
class Personne2 {
  constructor(nom,prenom) {
    this.nom = nom || "Thibaut",
    this.prenom = prenom || "Visticot"
  }

  get getFullName() {
    return "SECOND way: " + this.nom + " " + this.prenom;
  }
}

var pers2 = new Personne2();
console.log(pers2.getFullName);