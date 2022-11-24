import { setAddUserEltCallback, setAgeTypeEltEvents } from "./users-ui";

const addUserElt = document.querySelector('button.user-data__add');
const userElt = document.querySelector('ul.users');
const infoElt = document.querySelector('article.info')
setAddUserEltCallback(addUserElt, userElt, infoElt);
setAgeTypeEltEvents(userElt, infoElt);