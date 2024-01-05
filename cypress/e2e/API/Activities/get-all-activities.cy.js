/// <reference types="cypress" />

describe("Get method API test", () => {
  it("gets the data", () => {
    cy.request({
      method: "GET",
      url: "/Activities",
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.length).equal(30);
    });
  });
});
