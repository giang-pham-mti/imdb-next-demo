describe("About Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/about");
  });

  it("should display About title", () => {
    cy.get("h1").should("have.text", "About");
  });

  it("should display Donate button", () => {
    cy.get("#donate").should("have.text", "Donate");
  });
});
