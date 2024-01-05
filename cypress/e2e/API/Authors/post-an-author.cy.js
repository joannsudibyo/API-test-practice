/// <reference types="cypress" />

describe('Post method API test', () => {

    it('posts successfully with full data', () => {
        cy.fixture('Authors/api-test').then((data) => {
            const inputData = data
        
        cy.request({
            method:"POST",
            url:'/Authors',
            body: inputData
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(700)
            expect(response.body.idBook).equal(700)
            expect(response.body.firstName).equal('Test')
            expect(response.body.lastName).equal('Cypress')
        })

    })
})
it("posts successfully with an empty object", () => {
    cy.request({
      failOnStatusCode: false,
      method: "POST",
      url: "/Authors",
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
      url: "/Authors",
      headers: { "content-type": "application/json" },
      body: "0",
    }).then((response) => {
      expect(response.status).equal(400);
    });
  });

  it("returns an error when the data is partly empty", () => {
    cy.fixture('Authors/partly-empty').then((data) => {
      const inputData = data;

      cy.request({
        failOnStatusCode: false,
        method: "POST",
        url: "/Authors",
        body: inputData,
      }).then((response) => {
        expect(response.status).equal(400);
      });
    });
  });


})