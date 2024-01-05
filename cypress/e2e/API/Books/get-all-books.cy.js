/// <reference types = "Cypress" />

describe("Get method API test", () => {
    it("gets all data", () => {
        cy.request({
            method: "GET",
            url: '/Books'
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.length).equal(200)
        })
    })

})