export function createHtmlUser() {
  const li = document.createElement("li");
  li.className = "user";
  return li;
}

export function setAddUserEltCallback(addUserElt, usersElt) {

  document.getElementsByClassName(addUserElt)[0].addEventListener('click', () => {
    document.getElementsByClassName(usersElt)[0].appendChild(createHtmlUser())
  });
}