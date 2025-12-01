/// <reference types="cypress" />

import breedImagesSchema from "../../schemas/breed_images_schema.json";

// Teste responsável por validar a busca de imagens de uma raça específica
describe("GET /breed/{breed}/images", () => {

    it("Valida retorno de imagens + schema", () => {
        const breed = "hound"; // Raça usada no teste

        // Comando customizado definido em apiCommands.js
        cy.getBreedImages(breed).then((response) => {

            // Validações básicas da resposta
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq("success");
            expect(response.body.message).to.be.an("array").and.not.empty;

            // Validação contra o schema JSON
            cy.validateSchema(breedImagesSchema, response.body);
        });
    });
});
