/// <reference types="cypress" />

// Este teste valida um cenário negativo: quando o usuário tenta buscar imagens de uma raça inválida
describe("NEGATIVO — GET /breed/{breed}/images", () => {

    it("Deve retornar erro para raça inexistente", () => {
        const invalidBreed = "notadog"; // Raça inexistente para provocar erro

        cy.request({
            method: "GET",
            url: `/breed/${invalidBreed}/images`,
            failOnStatusCode: false // Permite continuar mesmo recebendo erro HTTP
        }).then((response) => {

            // Valida que a API retorna status 404 conforme esperado
            expect(response.status).to.eq(404);

            // Valida que o body contém um status de erro
            expect(response.body.status).to.eq("error");
        });
    });
});
