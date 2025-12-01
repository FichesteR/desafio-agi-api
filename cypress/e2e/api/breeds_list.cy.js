/// <reference types="cypress" />

import breedsListSchema from "../../schemas/breeds_list_schema.json";

// Teste responsável por validar a lista completa de raças retornada pela API
describe("GET /breeds/list/all", () => {

  it("Valida lista completa de raças + schema", () => {

    cy.getAllBreeds().then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");

      // A mensagem deve ser um objeto contendo todas as raças
      expect(response.body.message).to.be.an("object");

      // Valida schema
      cy.validateSchema(breedsListSchema, response.body);
    });
  });
});
