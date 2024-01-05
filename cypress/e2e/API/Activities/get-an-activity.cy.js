/// <reference types="cypress" />

describe("Get method API test", () => {
  const ids = Math.floor(Math.random() * 30) + 1;
  const nonid = Math.floor(Math.random() * -100);

  it("successfully get the data based on the id", () => {
    cy.request({
      method: "GET",
      url: `/Activities/${ids}`,
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.title).equal(`Activity ${ids}`);
      expect(response.body.id).equal(ids);
    });
  });

  it("returns an error when id is incorrect or does not exist", () => {
    cy.request({
      failOnStatusCode: false,
      method: "GET",
      url: `/Activities/${nonid}`,
    }).then((response) => {
      expect(response.status).equal(404);
    });
  });
});
