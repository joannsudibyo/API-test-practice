/// <reference types = "Cypress" />

describe("Delete method API test", () => {

    const ids = Math.floor(Math.random() * 500) +1

    it('deletes a data', () => {
        cy.request({
            method: "DELETE",
            url: `/Authors/${ids}`
        }).then((response) => {
            expect(response.status).equal(200)
        })
    })
})