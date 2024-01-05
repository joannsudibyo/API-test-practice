/// <reference types="cypress" />

describe('Get method API test', () => {

    const ids = Math.floor(Math.random()*30)+1
    const nonid = Math.random()
    
    it('returns the information through the book id', () => {
        cy.request({
            method: "GET",
            url:`/Books/${ids}`,
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(ids)
        })
    })

    it('returns 404 when id does not exist', () => {
        cy.request({
            failOnStatusCode: false,
            method: "GET",
            url:'/Books/1500'
        }).then((response) => {
            expect(response.status).equals(404)
        })
    })

    it('returns 400 when id does not exist', () => {
        cy.request({
            failOnStatusCode: false,
            method: "GET",
            url:`/Books/${nonid}`
        }).then((response) => {
            expect(response.status).equals(400)
        })
    })
})