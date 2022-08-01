//adresse email et un mot de passe.
//email et le mot de passe via le prompt:
// message “Identifiants incorrect devra s’afficher”, et l’utilisateur devra recommencer la saisie des valeurs.
//
//t limité à 5, ensuite le programme va s’arrêter avec un message disant
//


// Exercice 2.

const correctEmail = "correct@mail.com";
const correctMpd = "correctmdp";
let counter = 0;

while (true) {
  let email = prompt("email: ");
  let mdp = prompt("mot de passe: ");

  if (email == correctEmail && mdp == correctMpd) {
    alert("Welcome!");
    break;
  }

  counter++;
  if (counter == 5) {
    alert(`Trop de tentatives incorrectes. Ciao !`);
    break;
  }
  alert(
    `Mdp ou Email incorrects. Réessayez ---- il vous reste ${   5 - counter } tentatives`
  );
}