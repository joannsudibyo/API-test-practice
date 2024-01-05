/// <reference types = "Cypress" />

describe('Update method API test', () => {

    const ids = Math.floor(Math.random()*500) +1
    it('updates the data successfully', () => {

        cy.fixture('Authors/update-test').then((data) => {
            const inputData = data;
            
        cy.request({
            method: "PUT",
            url: `/Authors/${ids}`,
            body: inputData
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(60)
            expect(response.body.idBook).equal(60)
            expect(response.body.firstName).equal('abc')
            expect(response.body.lastName).equal('abc')
        })
    })
})

    it('returns an error when the input is null', () => {
        cy.request({
            failOnStatusCode: false,
            method:"PUT",
            url:`/Authors/${ids}`,
            headers: {"content-type": "application/json"},
            body: "0"
        }).then((response) => {
            expect(response.status).equal(400)
        })
    })
})