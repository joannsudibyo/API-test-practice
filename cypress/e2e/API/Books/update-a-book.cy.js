/// <reference types = "Cypress" />

describe("Update method API test", () => {

    const id = Math.floor(Math.random()*30)
    it("updates the data", () => {

        cy.fixture('Books/api-test').then((data) => {
            const inputData = data
      
        cy.request({
            failOnStatusCode: false,
            method: "PUT",
            url: `/Books/${id}`,
            body: inputData
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.length).equal(200)
        })
    })
})

})