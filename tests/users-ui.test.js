/**
 * @jest-environment jsdom
 */
import { createHtmlUser } from "../src/users-ui";

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
});

