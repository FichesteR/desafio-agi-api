/// <reference types="cypress" />

// Validação negativa para garantir que métodos incorretos retornem erro
describe("NEGATIVO — método inválido (POST onde é GET)", () => {

    it("Deve retornar erro ao usar POST em endpoint GET", () => {

        cy.request({
            method: "POST",
            url: "/breeds/image/random",
            failOnStatusCode: false
        }).then((response) => {

            // A API pode retornar 404 ou 405 dependendo da implementação do servidor
            expect(response.status).to.be.oneOf([404, 405]);
        });
    });
});
