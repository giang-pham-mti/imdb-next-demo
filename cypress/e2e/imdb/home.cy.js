describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("should display the navigation button", () => {
    cy.get("div:nth-child(1) > a:nth-child(1) > p")
      .first()
      .should("have.text", "home");
    cy.get("div:nth-child(1) > a:nth-child(2) > p").should(
      "have.text",
      "about"
    );
  });

  it("should display the search bar", () => {
    cy.get("input").should("have.attr", "placeholder", "Search keywords...");
  });

  it("should display the search button", () => {
    cy.get("button").should("have.text", "Search");
  });

  it("should display the results", () => {
    cy.get("div:nth-child(4) > div > div:nth-child(1)").should("exist");
  });
});
