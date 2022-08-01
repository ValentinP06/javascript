//  Ecrire un programme Javascript qui demande l’âge d’un enfant. Ensuite, il l’informe de sa catégorie :
// « Poussin » de 7 à 9 ans
// « Pupille » de 10 à 11 ans
// « Benjamin » de 12 à 13 ans
// « Minime » de 14 à 15 ans
// « Cadet » 16 à 17 ans

let age = parseInt(prompt("your age"));

if (age < 7) {
  alert("too small");
} else if (age < 10) {
  alert("poussin");
} else if (age < 12) {
  alert("pupille");
} else if (age < 14) {
  alert("benjamin");
} else if (age < 16) {
  alert("minime");
} else if (age < 18) {
  alert("minime");
} else {
  alert("trop grand");
}