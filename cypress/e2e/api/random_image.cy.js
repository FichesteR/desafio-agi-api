/// <reference types="cypress" />

import randomImageSchema from "../../schemas/random_image_schema.json";

// Teste responsável por validar o endpoint de imagem aleatória
describe("GET /breeds/image/random", () => {

    it("Valida imagem aleatória + schema", () => {

        cy.getRandomImage().then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq("success");

            // A API deve retornar uma URL de imagem válida
            expect(response.body.message).to.be.a("string");

            // Validação do schema JSON
            cy.validateSchema(randomImageSchema, response.body);
        });
    });
});
