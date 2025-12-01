import Ajv from "ajv";

// Configuro o AJV para validar schemas com mais detalhes e aceitar estruturas flexíveis
const ajv = new Ajv({ allErrors: true, strict: false });

// Comando customizado para validar schemas de resposta da API
Cypress.Commands.add("validateSchema", (schema, response) => {

    const validate = ajv.compile(schema);
    const valid = validate(response);

    // Se o schema não bater, exibo os erros encontrados
    if (!valid) {
        throw new Error(
            "Schema validation failed: " +
            JSON.stringify(validate.errors, null, 2)
        );
    }

    return true;
});
