/**
 * @jest-environment jsdom
 */
import { createHtmlUser, setAddUserEltCallback } from "../src/users-ui";

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

