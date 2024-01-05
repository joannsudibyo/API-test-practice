/// <reference types = "Cypress" />

import {faker} from '@faker-js/faker'

describe("Post method API test", () => {

    const fakerName = faker.internet.userName()
    const ids = Math.floor(Math.random()*50)+1
    const texts = faker.lorem.text()
    const dates = faker.date.recent()
    it("post a new data using faker", () => {
        cy.request({
            method: "POST",
            url: '/Books',
            body: {
                "id": ids,
                "title": fakerName,
                "description": texts,
                "pageCount": ids,
                "excerpt": texts,
                "publishDate": dates
            }
        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).equal(ids)
            expect(response.body.title).equal(fakerName)
            expect(response.body.description).equal(texts)
            expect(response.body.pageCount).equal(ids)
            expect(response.body.excerpt).equal(texts)
        })
    })

        it("returns an error when the data is partly empty", () => {
            cy.fixture('Books/partly-empty').then((data) => {
              const inputData = data;
        
              cy.request({
                failOnStatusCode: false,
                method: "POST",
                url: "/Books",
                body: inputData,
              }).then((response) => {
                expect(response.status).equal(400);
              });
            });
          });



        it('returns an error when empty', () => {
            cy.request({
                failOnStatusCode: false,
                method: "POST",
                url: '/Books',
                headers: { "content-type": "application/json"},
                body:"0"
            }).then((response) => {
                expect(response.status).equal(400)
            })
        })
  

})