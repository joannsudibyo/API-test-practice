/// <reference types="cypress" />

describe("Get method API test", () => {
  // for some reasons the response body changes every time it loads so we can't verify the length
  it("gets the data", () => {
    cy.request({
      method: "GET",
      url: "/Authors",
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.length).to.be.greaterThan(10);
    });
  });
});
