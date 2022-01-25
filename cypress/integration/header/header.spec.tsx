/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the header with the logo ", () => {
    cy.get("#logo");
  })

  it("Should render the header menu", () => {
    cy.get("#menu-bar")
  });

  it("Should render the header submenu", () => {
    cy.get("#submenu-bar")
  });
});

export {};
