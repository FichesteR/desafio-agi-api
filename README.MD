
# 🧪 Automação de Testes API — Desafio Técnico AGI

Este repositório contém a solução do **Desafio Técnico de QA (API)** do AGI, desenvolvida com foco em arquitetura limpa, escalabilidade e boas práticas avançadas de qualidade de software.

A automação foi construída utilizando **Cypress + AJV**, cobrindo cenários positivos, negativos e validação de contrato para a API pública **Dog CEO**.

Além dos testes, o projeto inclui um **pipeline completo via GitHub Actions**, garantindo execução contínua e artefatos automáticos.

---

# 🚀 Escopo de Testes Implementado

## ✔ 1. **GET /breeds/list/all — Lista todas as raças**
Valida:
- HTTP 200  
- Estrutura base da resposta  
- Objeto contendo todas as raças  
- **Validação de contrato via JSON Schema (AJV)**

## ✔ 2. **GET /breed/{breed}/images — Lista imagens por raça**
Valida:
- HTTP 200  
- Lista de URLs válidas  
- Array não vazio  
- **Contrato dedicado para retorno de imagens**

## ✔ 3. **GET /breeds/image/random — Imagem aleatória**
Valida:
- HTTP 200  
- URL de imagem válida  
- **Validação de contrato**  
- Estrutura consistente da API

## ✔ 4. Cenário Negativo — Raça inexistente
- Esperado: **404**
- Mensagem consistente de erro

## ✔ 5. Cenário Negativo — Endpoint inválido
- HTTP 404  
- API responde corretamente mesmo em chamadas incorretas

## ✔ 6. Cenário Negativo — Método inválido (POST em endpoint GET)
- HTTP 404 ou 405  
- Garante robustez e validação de comportamento inadequado

---

# 🧱 Boas Práticas Aplicadas

- Arquitetura modular (commands, support, schemas, e2e)  
- Testes legíveis e sem repetição (Custom Commands)  
- **Validação de contrato com AJV**  
- Comentários explicativos para mantenedores
- Separação clara entre cenários positivos e negativos  
- Estrutura preparada para crescimento e manutenção  

---

# 🔧 Execução

### 1. Instalar dependências
```
npm install
```

### 2. Executar testes
```
npm test
```

### 3. Abrir interface do Cypress
```
npx cypress open
```

---

# 🚦 Pipeline CI/CD — GitHub Actions

Arquivo: `.github/workflows/cypress-ci.yml`

Executa:
- Instalação  
- Execução headless  
- Upload automático de vídeos e screenshots  
- Validação de PRs e pushes na branch main  

---

# 🏁 Conclusão

Este projeto demonstra:
- Automação completa de API  
- Validação de contrato (AJV)  
- Arquitetura robusta  
- Pipeline CI/CD funcional  
