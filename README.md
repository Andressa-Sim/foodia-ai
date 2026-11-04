# 🍽️ FoodIA — Assistente Inteligente de Refeições

## Sobre o projeto

O FoodIA é um projeto independente de estudos, desenvolvido para praticar Desenvolvimento de Software com Inteligência Artificial.

Seu objetivo é ajudar usuários a encontrar sugestões de refeições considerando preferências alimentares, tipo de refeição e orçamento disponível.

## Tecnologias

- React
- TypeScript
- Vite
- HTML e CSS
- Git e GitHub
- Jira para acompanhamento ágil

## Funcionalidades

**Implementadas:**
- Configuração do ambiente React + TypeScript
- Interface inicial responsiva em desenvolvimento
- Personalização visual da página inicial

**Planejadas:**
- Formulário de preferências alimentares
- Recomendações de refeições
- Integração com API de IA generativa
- Tratamento de erros e testes funcionais

## Como executar

```bash
git clone https://github.com/Andressa-Sim/foodia-ai.git
cd foodia-ai/frontend-ts
npm install
npm run dev
```

## Organização do desenvolvimento

O projeto utiliza um quadro Scrum no Jira para acompanhar tarefas, evolução e entregas.

## Autoria


Desenvolvido por Andressa Alves Simão.

Projeto educacional independente, sem vínculo oficial com o iFood.

## Backend — FoodIA

### Tecnologias utilizadas
- Node.js
- TypeScript
- Express
- API REST

### Funcionalidades
- Recebimento de dados do formulário de refeições.
- Validação dos campos obrigatórios.
- Validação de orçamento maior que zero.
- Respostas JSON com códigos HTTP adequados.
- Estrutura modular para futura integração com Google Gemini.

### Executando o backend

```bash
cd backend
npm install
npm run dev
```

Servidor disponível em `http://localhost:3001`.

### Endpoints

**GET /health**

Verifica o funcionamento do servidor.

**POST /api/refeicoes**

Recebe os seguintes dados:

```json
{
  "tipoRefeicao": "Almoço",
  "preferenciaAlimentar": "Vegetariana",
  "orcamento": 25
}
```

### Testes realizados

| Cenário | HTTP | Resultado |
|---|---|---|
| Servidor funcionando | 200 | Aprovado |
| Dados válidos | 200 | Aprovado |
| Orçamento igual a zero | 400 | Aprovado |
| Tipo de refeição vazio | 400 | Aprovado |

### Próximas melhorias

Integração com Google Gemini para geração de sugestões inteligentes de refeições, em tarefa futura.