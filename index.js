/* class personne */
class personne {
    constructor(nom, prenom, age, compagne = undefined){
        this.nom = nom ;
        this.prenom = prenom ;
        this.age = age ;
        this.compagne = compagne ;
    }
}

/* declaration d'objet */
let moi = new personne('dufour', 'stephane' , 40, ) ;

let cherie = new personne("bouchard", 'angelique', 27) ;

moi.compagne = cherie ;

cherie.compagne = moi ;

console.log(moi) ;

console.log(cherie) ;

/* modification du prototype class personne */
personne.prototype.content = undefined ;

console.log(moi.content) ;

console.log(cherie.content) ;


moi.content = true ;

cherie.content = true ;

/* modification du prototype class personne */
personne.prototype.utilisation = function () {
    console.log(`${this.nom} ${this.prenom} est avec ${this.compagne.nom} ${this.compagne.prenom}`)
};

personne.prototype.identite = function (){
    console.log(`je suis ${this.nom} ${this.prenom} et je suis ${this.sexe}`) ;
};

console.log(moi.content) ;

console.log(cherie.content) ;

moi.utilisation() ;

cherie.utilisation() ;

/* ajoute de propriété sur le protoype class */
personne.prototype.sexe ;

console.log(moi.sexe) ;

console.log(cherie.sexe) ;

moi.sexe = 'masculin' ;

cherie.sexe = 'feminin' ;

console.log(moi.sexe) ;

console.log(cherie.sexe) ;

moi.identite() ;

cherie.identite() ;


/* fonction simple */
function stef (){
    console.log("salut tout le monde") ;
}

stef () ;


/* Vous allez créer un tableau avec 4 éléments qui sont tous des nombres, entre 0 et 20
et vous allez créer une fonction qui calcule la moyenne des nombre du tableau */


let notes = [15 , 10 , 20 , 5]
let note = 20 ;

function moyenne(valeur = []){
    
    if(typeof valeur === "object")
    {
        console.log(valeur) ;
        let somme = null ;
        for(index in valeur){
            console.log(valeur[index]) ;
            somme += valeur[index] ;
        }
        console.log(somme / valeur.length)
    }else{
        console.log('attention !!')
    }
}

moyenne(notes) ;
moyenne(note) ;


class Rectangle {
    constructor(hauteur, largeur) {
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
  
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      return this.largeur * this.hauteur;
    }
}
  
const carré = new Rectangle(10, 10);
  
console.log(carré.area);

console.log(carré.calcArea);


/* Vous allez créer un tableau avec 6 prénoms trois prénom masculins et 3 prénoms féminins,
et pour chaque prénom, si le prenom est féminin vous écrivez en console (le prenom)
est un prénom féminin sinon vous écrivez en console (le prenom) est un prenom masculin */


let tableauPrenom = ["stephane" , "sebastien" , "sylvain" , "angélique" , "romane" , "Anissa"] ;

function MasculinFeminin (valeur = []) {

    console.log(valeur)

    for(index in valeur){
        switch (valeur[index]){
            case "stephane" :
                console.log(`${valeur[index]} est masculin`) ;
                break ;
            case "sebastien" :
                console.log(`${valeur[index]} est masculin`) ;
                break ;
            case "sylvain" :
                console.log(`${valeur[index]} est masculin`) ;
                break ;
            case "angélique" :
                console.log(`${valeur[index]} est féminin`) ;
                break ;
            case "romane" :
                console.log(`${valeur[index]} est féminin`) ;
                break ;
            case "Anissa" :
                console.log(`${valeur[index]} est féminin`) ;
                break ;
                      
            default :
                console.log("trop loin dans le tableau")
        }
    }  

};

MasculinFeminin(tableauPrenom)  ;

let tableau = ['je' , 'suis' , 'pas' , 'la' , 'pour' , 'ca'];
let tableauALire = tableau[Symbol.iterator]();
console.log(tableau);
console.log(tableauALire.next().value); // je
console.log(tableauALire.next().value); // suis
console.log(tableauALire.next().value); // pas
console.log(tableauALire.next().value); // la
console.log(tableauALire.next().value); // pour
console.log(tableauALire.next().value); // ca
console.log(tableauALire.next().value); // indéfini


Array.prototype.bonjour = function () {
    console.log("bonjour je suis un tabeau")
};


tableau.bonjour() ;

for(index of tableau){
    console.log(`${index}`)
}