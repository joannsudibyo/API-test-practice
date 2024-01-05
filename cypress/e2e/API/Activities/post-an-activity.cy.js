/// <reference types="cypress" />

describe("Post method API test", () => {
  it("posts successfully with full data", () => {
    cy.fixture("Activities/api-test").then((data) => {
      const inputData = data;

      cy.request({
        failOnStatusCode: false,
        method: "POST",
        url: "/Activities",
        body: inputData,
      }).then((response) => {
        expect(response.status).equal(200);
        expect(response.body.id).equal(1);
        expect(response.body.completed).equal(false);
      });
    });
  });

  it("posts successfully with an empty object", () => {
    cy.request({
      failOnStatusCode: false,
      method: "POST",
      url: "/Activities",
      body: {},
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.id).equal(0);
    });
  });

  it("returns an error when the data is null", () => {
    cy.request({
      failOnStatusCode: false,
      method: "POST",
      url: "/Activities",
      headers: { "content-type": "application/json" },
      body: "0",
    }).then((response) => {
      expect(response.status).equal(400);
    });
  });

  it("returns an error when the data is partly empty", () => {
    cy.fixture("Activities/partly-empty").then((data) => {
      const inputData = data;

      cy.request({
        failOnStatusCode: false,
        method: "POST",
        url: "/Activities",
        body: inputData,
      }).then((response) => {
        expect(response.status).equal(400);
      });
    });
  });
});
