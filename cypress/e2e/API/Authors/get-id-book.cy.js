/// <reference types="cypress" />

describe("Get method API test", () => {

    const ids = Math.floor(Math.random()*150)+1
    const nonid = Math.random()
    
    it("gets the book id", () => {
      cy.request({
        method: "GET",
        url: `/Authors/authors/books/${ids}`,
      }).then((response) => {
        expect(response.status).equal(200);
        const arrayOfIdBook = response.body
        for(var i =0; i<arrayOfIdBook.length; i++){
          expect(arrayOfIdBook[i].idBook).equal(ids)
        }
      });
    });

    it("returns 200 when id book does not exist", () => {
        cy.request({
          method: "GET",
          url: '/Authors/authors/books/0',
        }).then((response) => {
          expect(response.status).equal(200);
        });
      });

    it("returns an error when id book is incorrect", () => {
        cy.request({
            failOnStatusCode: false,
          method: "GET",
          url: `/Authors/authors/books/${nonid}`,
        }).then((response) => {
          expect(response.status).equal(400);
        });
      });
  });
  