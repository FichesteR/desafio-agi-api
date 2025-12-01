/// <reference types="cypress" />

// Valida que acessar um endpoint inválido retorna erro corretamente
describe("NEGATIVO — endpoint inexistente", () => {

    it("Deve retornar 404 ao acessar endpoint inválido", () => {

        cy.request({
            method: "GET",
            url: "/this-endpoint-does-not-exist",
            failOnStatusCode: false
        }).then((response) => {

            expect(response.status).to.eq(404);

            // A API retorna uma estrutura de erro, então apenas verifico que existe
            expect(response.body.status).to.exist;
        });
    });
});
