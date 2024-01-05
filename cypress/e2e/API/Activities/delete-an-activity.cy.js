/// <reference types="cypress" />

describe("Delete method API test", () => {
  const ids = Math.floor(Math.random() * 30) + 1;

  // the web will return 200 for all id input, so we will ignore negative testing
  it("deletes the data", () => {
    cy.request({
      method: "DELETE",
      url: `/Activities/${ids}`,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });
});
