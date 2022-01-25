/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the introduction and check its visibility", () => {
    cy.get("#paint-shape").should("be.visible");
  });
});

export {};
