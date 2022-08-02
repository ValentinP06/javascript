// # Identité : sans prompt
// var nom = "Lisangola";
// var prenom = "Christian";
// var age = 56;
// console.log(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);

// # Identité :Saisie avec prompt
// # var nom = prompt("Votre nom : ");
// # var prenom = prompt("Votre prenom : ");
// # var age = prompt("Votre age : ");
// # alert(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);



// # exo
// #Déclarer 2 variables,
// #Déclarer une variable qui est égal à la somme des 2 variables
// #Afficher un message d’alerte  « Bienvenue sur la page de formulaire »
// #La console du navigateur affiche le contenu des variables.
// #L’alert  affiche « Le résultat est » + le résultat du calcul.

var x = prompt("number1: ");
var y = prompt("number2: ");

var var1 = parseFloat(x);
var var2 = parseFloat(y);

var total = var1 + var2;

alert("Bienvenue sur la page de formulaire");
console.log(`var1 = ${var1} | var2 = ${var2}`);
console.log(`Le résultat est: ${total}`);
console.log(`Le résultat est: ${var1 + var2}`);

// # 2.Ecrire un programme Javascript qui demande à l’utilisateur d’entrer à partir du clavier:
// # La distance parcours(m)
// # Le temps(sec)
// # Puis calculer la vitesse selon la formule:
// # vitesse=distance parcourue/temps
// # Puis afficher le résultat dans le format suivant : 345 m/s(utiliser alert et console.log)

var  distanceparcours = prompt(" distance parcours : ");
var  temps = prompt(" Le temps(sec) : ");
var  vitesse = (distanceparcours/temps);
alert(`Votre vitesse est ${vitesse}  m/s`);

console.log(`Votre vitesse est ${vitesse} `);


