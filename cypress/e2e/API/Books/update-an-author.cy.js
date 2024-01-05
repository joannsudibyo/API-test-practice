/// <reference types = "Cypress" />

describe("Update method API test", () => {

    const id = Math.floor(Math.random()*30)
    it("updates all data", () => {

        cy.fixture('api-test').then({
            
        })
        cy.request({
            method: "PUT",
            url: `/Books/${id}`,
            body: inputData
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.length).equal(200)
        })
    })

})