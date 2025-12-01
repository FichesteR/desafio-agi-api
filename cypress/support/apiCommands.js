// GET: Lista todas as raças
Cypress.Commands.add("getAllBreeds", () => {
    return cy.request("GET", "/breeds/list/all");
});

// GET: Imagens de uma raça específica
Cypress.Commands.add("getBreedImages", (breed) => {
    return cy.request("GET", `/breed/${breed}/images`);
});

// GET: Imagem aleatória
Cypress.Commands.add("getRandomImage", () => {
    return cy.request("GET", "/breeds/image/random");
});
