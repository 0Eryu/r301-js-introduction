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
    const age = Math.floor(Math.random() * 42);
    usersElt.appendChild(createHtmlUser(age))
  });
}