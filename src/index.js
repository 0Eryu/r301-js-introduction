import { setAddUserEltCallback } from "./users-ui";

const addUserElt = document.querySelector("button.user-data__add");
const userElt = document.querySelector("ul.users");
const age = setAddUserEltCallback(addUserElt, userElt);
