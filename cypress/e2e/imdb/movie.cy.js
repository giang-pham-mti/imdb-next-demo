describe("Movie Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
    cy.get("div:nth-child(4) > div > div:nth-child(1) > a").click();
  });

  it("should display the movie title", () => {
    cy.get("h2").should("exist");
  });

  it("should display the movie poster", () => {
    cy.get("img").should("exist");
  });
});
