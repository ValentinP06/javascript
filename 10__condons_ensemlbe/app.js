// # staffs from the form
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const submitButton = document.querySelector("#submit_button");

// # Users table
const usersTableBody = document.querySelector("#users_list");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  // # Afficher les données du formulaire dans la console
  console.log("First name : ", firstName.value);
  console.log("Last name : ", lastName.value);
  console.log("Email : ", email.value);

  // # Création de ligne pour l'utilisateur
  const userRow = document.createElement("tr");

  // # Création des colonne
  const lastNameColumn = document.createElement("td");
  lastNameColumn.innerText = lastName.value;

  const firstNameColumn = document.createElement("td");
  firstNameColumn.innerText = firstName.value;

  const emailColumn = document.createElement("td");
  emailColumn.innerText = email.value;

  const actionsColumn = document.createElement("td");
  actionsColumn.innerText = "Actions";

  // # ajouter plusieurs enfants
  userRow.append(lastNameColumn, firstNameColumn, emailColumn, actionsColumn);
  // # ajouter un seul enfant
  usersTableBody.appendChild(userRow);

  //# vider le fomrulaire
  firstName.value = "";
  lastName.value = "";
  email.value = "";
});

// # Ajouter un bouton réinitialiser
// # Vider tous les champs, quand on clique sur le bouton réinitiliser
// # Ajouter un champs pays et numéro de téléphone
