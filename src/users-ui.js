import { adultFilter, ageAverage } from "./introduction";

/**
 * Crée un utilisateur HTML.
 *
 * @param age {int} âge de l'utilisateur.
 * @returns {HTMLLIElement} élément HTML représentant l'utilisateur.
 */
export function createHtmlUser(age) {
  const li = document.createElement("li");
  li.className = "user";
  li.innerHTML += "<input type='text' value='Name' class='input user__name'>";
  li.innerHTML += `<input type='number' value='${age}' class='input user__age'>`;
  li.innerHTML += '<button value="delete" class="input user__delete">delete</button>';
  return li;
}

/**
 * Ajoute un utilisateur à la liste des utilisateurs.
 *
 * @param addUserElt {HTMLButtonElement} bouton d'ajout d'utilisateur.
 * @param usersElt {HTMLUListElement} liste des utilisateurs.
 * @param infoElt {HTMLDivElement} div d'information.
 */
export function setAddUserEltCallback(addUserElt, usersElt, infoElt) {
  // eslint-disable-next-line no-param-reassign
  infoElt = infoElt || null;
  addUserElt.addEventListener('click', () => {
    const age = Math.floor(Math.random() * (32 - 12 + 1) + 12);
    const userElt = createHtmlUser(age);
    usersElt.appendChild(userElt);
    if (infoElt !== null) {
      // eslint-disable-next-line no-use-before-define
      updateAgeAverage(usersElt, infoElt);
      // eslint-disable-next-line no-use-before-define
      setUserEltCallbacks(userElt, usersElt, infoElt);
    }
  });
}

/**
 * Extrait les informations d'un utilisateur.
 *
 * @param userElt {HTMLLIElement} élément HTML représentant l'utilisateur.
 * @returns {{name: *, age: number}} informations de l'utilisateur.
 */
export function extractUser(userElt) {
  const name = userElt.getElementsByClassName("user__name")[0].value;
  const age = userElt.getElementsByClassName("user__age ")[0].value;
  return { name, age: parseInt(age, 10) };
}

/**
 * Extrait les utilisateurs d'une liste d'utilisateurs.
 *
 * @param usersElt {HTMLUListElement} liste des utilisateurs.
 * @returns {*[]} liste des utilisateurs.
 */
export function extractUsers(usersElt) {
  const users = Array.from(usersElt.querySelectorAll("li.user"));
  const returnUsers = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const user of users) {
    returnUsers.push(extractUser(user));
  }
  return returnUsers;
}

/**
 * Extrait le type d'utilisateur sélectionné dans un radio.
 *
 * @param infoElt {HTMLDivElement} div d'information.
 * @returns {*} type d'utilisateur sélectionné.
 */
export function extractUserType(infoElt) {
  const infos = Array.from(infoElt.querySelectorAll('input[type="radio"]'));
  let returnValue;
  // eslint-disable-next-line no-restricted-syntax
  for (const info of infos) {
    if (info.checked) {
      returnValue = info.value;
    }
  }
  return returnValue;
}

/**
 * Met à jour l'âge moyen.
 *
 * @param usersElt {HTMLUListElement} liste des utilisateurs.
 * @param infoElt {HTMLDivElement} div d'information.
 */
export function updateAgeAverage(usersElt, infoElt) {
  const average = ageAverage(extractUsers(usersElt), extractUserType(infoElt));
  const HTMLElt = infoElt.querySelector("span.info__age-average");
  HTMLElt.innerText = "";
  if (average !== null) {
    HTMLElt.innerText = parseFloat(average).toFixed(2);
  }
}

/**
 * Permet la suppression ou la modification d'un utilisateur tout en mettant à jour l'âge moyen.
 *
 * @param userElt {HTMLLIElement} élément HTML représentant l'utilisateur.
 * @param usersElt {HTMLUListElement} liste des utilisateurs.
 * @param infoElt {HTMLDivElement} div d'information.
 */
export function setUserEltCallbacks(userElt, usersElt, infoElt) {
  const deleteButton = userElt.querySelector('.user__delete');
  deleteButton.addEventListener('click', () => {
    userElt.remove();
    updateAgeAverage(usersElt, infoElt);
    // eslint-disable-next-line no-use-before-define
    updateUserClassName(userElt);
  });

  const updateButton = userElt.querySelector('.user__age');
  updateButton.addEventListener('change', () => {
    updateAgeAverage(usersElt, infoElt);
    // eslint-disable-next-line no-use-before-define
    updateUserClassName(userElt);
  });
}

/**
 * Modifie l'âge moyen en fonction du type d'utilisateurs choisi dans le radio.
 *
 * @param usersElt {HTMLUListElement} liste des utilisateurs.
 * @param infoElt {HTMLDivElement} div d'information.
 */
export function setAgeTypeEltEvents(usersElt, infoElt)
{
  const form = infoElt.querySelector('.info__age-average-type');
  form.addEventListener('click', () => {
    const adultUsers = adultFilter(usersElt);
    updateAgeAverage(adultUsers, infoElt);
  });
}

/**
 * Met à jour le style css d'un utilisateur si celui-ci est mineur.
 *
 * @param userElt {HTMLLIElement} élément HTML représentant l'utilisateur.
 */
export function updateUserClassName(userElt) {
  const age = userElt.querySelector('.user__age').value;
  if (age < 18) {
    userElt.classList.add('user--child');
  } else {
    userElt.classList.remove('user--child');
  }
}