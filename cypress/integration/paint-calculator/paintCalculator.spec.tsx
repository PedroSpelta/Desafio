/// <reference types="cypress"/>

context("Paint Calculator Components", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the introduction and check its visibility", () => {
    cy.get("#paint-container").should("be.visible");
  });

  it("Should render the paint shape and check its visibility", () => {
    cy.get("#paint-shape").children().eq(1).children().should("have.length", 3);
  });

  it("Should render the paint input and check its visibility", () => {
    cy.get("#paint-measure")
      .children()
      .eq(0)
      .contains("Measure your walls")
      .should("be.visible");

    cy.get("#paint-measure")
      .children()
      .eq(1)
      .children()
      .eq(1)
      .should("be.visible");
  });
});

context("Paint Calculator functions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the introduction and check its visibility", () => {
    cy.get("#paint-container").should("be.visible");
  });

  it("Click on a ");
});

export {};
