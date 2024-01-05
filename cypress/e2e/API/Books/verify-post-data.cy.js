/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";

let postData;
const id = Math.floor(Math.random() * 70) + 1;
const dates = faker.date.recent();

describe("Verify recent post and updated data test", () => {
  it("post the data successfully", () => {
    cy.request({
      method: "POST",
      url: "/Books",
      body: {
        id,
        title: `Book ${id}`,
        description:
          "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n",
        pageCount: 0,
        excerpt:
          "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n",
        publishDate: dates,
      },
    }).then((response) => {
      expect(response.status).equal(200);
      postData = response.body;
    });
  });

  it("gets the posted data", () => {
    cy.request({
      method: "GET",
      url: `/Books/${id}`,
    }).then((response) => {
      expect(response.body.id).equal(id);
      expect(response.body.title).equal(postData.title);
      expect(response.body.description).equal(postData.description);
      expect(response.body.excerpt).equal(postData.excerpt);
    });
  });

  it("updates the data successfully", () => {
    cy.request({
      method: "PUT",
      url: `/Books/${id}`,
      body: {
        id,
        title: `Book ${id}`,
        description:
          "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n",
        pageCount: 0,
        excerpt:
          "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n",
        publishDate: dates,
      },
    }).then((response) => {
      expect(response.status).equal(200);
      postData = response.body;
    });
  });

  it("gets the updated data", () => {
    cy.request({
      method: "GET",
      url: `/Books/${id}`,
    }).then((response) => {
      expect(response.body.id).equal(id);
      expect(response.body.title).equal(postData.title);
      expect(response.body.description).equal(postData.description);
      expect(response.body.excerpt).equal(postData.excerpt);
    });
  });
});
