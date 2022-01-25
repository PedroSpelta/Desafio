/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the introduction and check its visibility", () => {
    cy.get("#introduction-text")
      .should("be.visible");

    cy.get("#info-button").click();

    cy.get("#introduction-text")
      .should("not.be.visible");
  });
});

export {};
