/**
 * Permet de faire une addition.
 *
 * @param a {int} Le premier nombre.
 * @param b {int} Le deuxième nombre.
 * @returns {int} La somme des deux nombres.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Permet de faire une soustraction.
 *
 * @param a {int} Le premier nombre.
 * @param b {int} Le deuxième nombre.
 * @returns {int} La soustraction des deux nombres.
 */
export function sub(a, b) {
  return b - a;
}

/**
 * Permet de faire une multiplication.
 *
 * @param values {int[]} Les nombres à multiplier.
 * @returns {int} Le produit des nombres.
 */
export function sum(values) {
  let arraySum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < values.length; i++) {
    arraySum += values[i];
  }
  return arraySum;
}

/**
 * Permet d'ajouter la valeur toAdd à toutes les copies du tableau values.
 *
 * @param values {int[]} Le tableau de valeurs.
 * @param toAdd {int} La valeur à ajouter.
 * @returns {int[]} Le tableau de valeurs avec la valeur toAdd ajoutée.
 */
export function addToAll(values, toAdd) {
  const map = values.map(value => value + toAdd);
  return map;
}

/**
 * Permet de calculer la moyenne des valeurs du tableau values.
 *
 * @param values {int[]} Le tableau de valeurs.
 * @returns {null|number} La moyenne des valeurs du tableau values.
 */
export function average(values) {
  if (values.length === 0) {
    return null;
  }
  return sum(values) / values.length;
}

/**
 * Permet de vérifier si user est un adulte.
 *
 * @param user {object} L'utilisateur à vérifier.
 * @returns {boolean} true si user est un adulte, false sinon.
 */
export function isAdult(user) {
  if (user.age >= 18) {
    return true
  }
  return false;
}

/**
 * Permet de vérifier si user est un enfant.
 *
 * @param user {object} L'utilisateur à vérifier.
 * @returns {boolean} true si user est un enfant, false sinon.
 */
export function isChild(user) {
  if (user.age < 18) {
    return true
  }
  return false;
}

/**
 * Extrait les ages des utilisateurs du tableau users.
 *
 * @param users {object[]} Le tableau d'utilisateurs.
 * @returns {*[]} Le tableau des ages des utilisateurs.
 */
export function extractAge(users) {
  const ageArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < users.length; i++) {
    ageArray.push(users[i].age);
  }
  return ageArray;
}

/**
 * Permet de filtrer le tableau users en fonction de type.
 *
 * @param users {object[]} Le tableau d'utilisateurs.
 * @param type {string} Le type d'utilisateur à filtrer.
 * @returns {*} Le tableau d'utilisateurs filtré.
 */
export function adultFilter(users, type) {
  let returnArray = [];
  if (type === "adult") {
    returnArray = users.filter(user => user.age >= 18);
  } else if (type === "child") {
    returnArray = users.filter(user => user.age < 18);
  } else {
    return users;
  }
  return returnArray;
}

/**
 * Permet de faire la moyenne des ages des utilisateurs du tableau users en fonction du type d'utilisateurs à filtrer.
 *
 * @param users {object[]} Le tableau d'utilisateurs.
 * @param type {string} Le type d'utilisateur à filtrer.
 * @returns {number|null} La moyenne des ages des utilisateurs du tableau users en fonction du type d'utilisateurs à filtrer.
 */
export function ageAverage(users, type) {
  return average(extractAge(adultFilter(users, type)));
}

/**
 * Vérifie si tous les utilisateurs du tableau users sont des adultes.
 *
 * @param users {object[]} Le tableau d'utilisateurs.
 * @returns {boolean} true si tous les utilisateurs du tableau users sont des adultes, false sinon.
 */
export function isAllAdult(users) {
  return adultFilter(users, "adult").length === users.length;
}

/**
 * Vérifie si au moins un utilisateur du tableau users est un enfant.
 *
 * @param users {object[]} Le tableau d'utilisateurs.
 * @returns {boolean} true si au moins un utilisateur du tableau users est un enfant, false sinon.
 */
export function hasChild(users) {
  return !isAllAdult(users);
}

/**
 * Ajoute une propriété isAdult à tous les utilisateurs du tableau users.
 *
 * @param users {object[]} Le tableau d'utilisateurs.
 * @returns {*[]} Le tableau d'utilisateurs avec la propriété isAdult true si l'utilisateur est un adulte, false sinon.
 */
export function addIsAdultProperty(users) {
  const usersCopy = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const user of users) {
    usersCopy.push({ ...user, isAdult: isAdult(user) });
  }
  return usersCopy;
}