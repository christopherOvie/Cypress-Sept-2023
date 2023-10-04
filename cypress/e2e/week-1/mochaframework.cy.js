/// <reference types="cypress" />
import { setupHook } from "../../support/e2e";
describe("test suite ", () => {
  describe("test suite for web testing", () => {
    it("test case 001", () => {
      cy.log("test case 001");
    });
    it("test case 002", () => {
      cy.log("test case 002");
    });
    it("test case 003", () => {
      cy.log("test case 003");
    });
    it("test case 004", () => {
      cy.log("test case 004");
    });
  });

  describe("test suite for api testing", () => {
    it("test case 004", () => {
      cy.log("test case 004");
    });
  });

  describe("test suite for visual testing", () => {
    it("test case 004", () => {
      cy.log("test case 004");
    });
  });
});
