/// <reference types = "Cypress"/>

describe('Get method API test', () => {

    const ids = Math.floor(Math.random()*500) +1
    const nonid = Math.random()

    it('returns the correct data when id is inserted', () => {
        cy.request({
            method:"GET",
            url:`/Authors/${ids}`
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(ids)
            expect(response.body.firstName).equal(`First Name ${ids}`)
            expect(response.body.lastName).equal(`Last Name ${ids}`)
        })
    })

    it('returns an error when id does not exist', () => {
        cy.request({
            failOnStatusCode: false,
            method: "GET",
            url:`/Author/${nonid}`
        }).then((response) => {
            expect(response.status).equal(404)
        })
    })

})