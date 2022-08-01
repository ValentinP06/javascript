//3.Ecrire un programme javascript qui demande un nombre compris entre 10 et 20,
// jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera
//  apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le
//   nombre est inférieur à 10.
//

// Exercice 3.

while (true) {
    let inputNumber = parseInt(prompt("number between 10 and 20"));
    console.log(inputNumber);
  
    if (Number.isNaN(inputNumber)) {
      alert("not a valid number");
    } else if (inputNumber < 10) {
      alert("input number is too low");
    } else if (inputNumber > 20) {
      alert("input number is too high");
    } else {
      alert("input number is correct!");
      break;
    }
  }