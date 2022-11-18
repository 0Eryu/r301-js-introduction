/**
 * @jest-environment jsdom
 */
import { createHtmlUser, extractUser, setAddUserEltCallback } from "../src/users-ui";

describe("createHtmlUser", () => {
  test("return an HTMLElement", () => {
    expect(createHtmlUser(12) instanceof HTMLElement).toBe(true);
  });

  test("returned element must be li", () => {
    expect(createHtmlUser(12).nodeName).toBe("LI");
  });

  test("returned element must have a CSS class 'user'", () => {
    expect(createHtmlUser(12).classList.contains("user")).toBe(true);
  });

  test("returned element must contain an element input[type='text'].input.user__name", () => {
    expect(
      createHtmlUser(12).querySelector(
        "input[type='text'].input.user__name, input.input.user__name",
      ),
    ).not.toBe(null);
  });

  test("returned element must contain an element input[type='number'].input.user__age", () => {
    expect(
      createHtmlUser(12).querySelector("input[type='number'].input.user__age"),
    ).not.toBe(null);
  });

  test("returned element must contain an element button[type='button'].button.user__delete", () => {
    expect(
      createHtmlUser(12).querySelector("input[type='number'].input.user__age"),
    ).not.toBe(null);
  });

  test("input[type='number'].input.user__age must contain given parameter", () => {
    expect(
      createHtmlUser(12).querySelector("input[type='number'].input.user__age")
        .value,
    ).toBe("12");
  });
});

describe("setAddUserEltCallback", () => {
  test("2 clicks must create 2 user items in HTML users container", () => {
    const usersElt = document.createElement("div");
    const addUserElt = document.createElement("button");
    setAddUserEltCallback(addUserElt, usersElt);
    addUserElt.click();
    addUserElt.click();
    expect(usersElt.querySelectorAll("li.user").length).toBe(2);
  });
});

describe("extractUser", () => {
  test("return a user object from a user HTML element (li.user)", () => {
    document.body.innerHTML = `<ul>
      <li class="user"><input class="input user__name" value="Bob" /> - <input class="input user__age" type="number" value="42" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
      <li class="user"><input class="input user__name" value="Jim" /> - <input class="input user__age" type="number" value="24" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
    </ul>`;
    const usersElts = document.querySelectorAll("li.user");
    expect(extractUser(usersElts[0])).toEqual({ name: "Bob", age: 42 });
    expect(extractUser(usersElts[1])).toEqual({ name: "Jim", age: 24 });
  });
});