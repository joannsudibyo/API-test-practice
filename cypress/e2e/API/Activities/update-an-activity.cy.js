/// <reference types="cypress" />

describe("Update method API test", () => {
  const ids = Math.floor(Math.random() * 30) + 1;

  it("successfully update an activity", () => {
    cy.fixture("Activities/update-test").then((data) => {
      const inputData = data;

      cy.request({
        failOnStatusCode: false,
        method: "PUT",
        url: `/Activities/${ids}`,
        body: inputData,
      }).then((response) => {
        expect(response.status).equal(200);
        expect(response.body.id).equal(55);
        expect(response.body.title).equal("update test");
        expect(response.body.completed).equal(true);
      });
    });
  });

  // the web will return 200 for all id input, so we will ignore negative testing
  it("returns an error when the body is partly empty", () => {
    cy.fixture("Activities/partly-empty").then((data) => {
      const inputData = data;

      cy.request({
        failOnStatusCode: false,
        method: "PUT",
        url: `/Activities/${ids}`,
        body: inputData,
      }).then((response) => {
        expect(response.status).equal(400);
      });
    });
  });

  it("returns an error when the data is null", () => {
    cy.request({
      failOnStatusCode: false,
      method: "PUT",
      url: `/Activities/${ids}`,
      headers: { "content-type": "application/json" },
      body: "0",
    }).then((response) => {
      expect(response.status).equal(400);
    });
  });
});
