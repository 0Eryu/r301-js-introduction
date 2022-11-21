import { ageAverage } from "./introduction";

export function createHtmlUser(age) {
  const li = document.createElement("li");
  li.className = "user";
  li.innerHTML +=  "<input type='text' value='Name' class='input user__name'>";
  li.innerHTML += `<input type='number' value='${  age }' class='input user__age'>`;
  li.innerHTML += "<input type='button' value='delete' class='input user__delete'>";
  return li;
}

export function setAddUserEltCallback(addUserElt, usersElt) {
  addUserElt.addEventListener('click', () => {
    const age = Math.floor(Math.random() * (32 - 12 + 1) + 12);
    usersElt.appendChild(createHtmlUser(age))
    // eslint-disable-next-line no-use-before-define
    updateAgeAverage(usersElt, document.querySelector("article.info"));
  });
}

export function extractUser(userElt) {
  const name = userElt.getElementsByClassName('user__name')[0].value;
  const age = userElt.getElementsByClassName('user__age ')[0].value;
  return {name, age: parseInt(age, 10)};
}

export function extractUsers(usersElt) {
  const users = Array.from(usersElt.querySelectorAll('li.user'));
  const returnUsers = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const user of users) {
    returnUsers.push(extractUser(user));
  }
  return returnUsers;
}

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

export function updateAgeAverage(usersElt, infoElt) {
  const average = ageAverage(extractUsers(usersElt),  extractUserType(infoElt));
  const HTMLElt = infoElt.querySelector('span.info__age-average');
  HTMLElt.innerText = "";
  if (average !== null) {
    HTMLElt.innerText = parseFloat(average).toFixed(2);
  }

}