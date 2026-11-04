# 🍽️ FoodIA — Assistente Inteligente de Refeições

**Aplicação Full Stack com Inteligência Artificial | React | TypeScript | Node.js | Google Gemini**

## 📌 Sobre o projeto

O **FoodIA** é uma aplicação web que utiliza inteligência artificial para sugerir refeições personalizadas de acordo com as preferências alimentares e o orçamento disponível do usuário.

O projeto foi desenvolvido com o objetivo de aplicar conhecimentos em desenvolvimento web, integração de APIs, organização de código e experiência do usuário.

## 🚀 Funcionalidades

- Seleção do tipo de refeição: café da manhã, almoço, jantar ou lanche.
- Escolha de preferências alimentares.
- Definição do orçamento disponível.
- Geração de sugestões de receitas utilizando Google Gemini.
- Exibição de ingredientes e quantidades.
- Instruções de preparo passo a passo.
- Estimativa de custo dos ingredientes.
- Interface responsiva para computadores e dispositivos móveis.
- Validação de campos e apresentação de mensagens de carregamento e erro.

## 🛠️ Tecnologias utilizadas

**Frontend**
- React
- TypeScript
- CSS3
- Vite
- React Markdown

**Backend**
- Node.js
- Express
- TypeScript
- Google Gemini API
- Biblioteca `@google/genai`

**Ferramentas**
- Git e GitHub
- Visual Studio Code
- Jira — Scrum
- cURL para testes de API

## 🧠 Como funciona

1. O usuário seleciona o tipo de refeição.
2. Informa sua preferência alimentar.
3. Define o orçamento disponível.
4. O frontend envia os dados ao backend.
5. O backend utiliza a API Google Gemini para gerar uma sugestão.
6. O FoodIA apresenta a receita, ingredientes, preparo e custo estimado.

**Observação:** Os preços são estimativas geradas pela IA e podem variar conforme a região e o estabelecimento. Não representam uma consulta de preços em tempo real.

## 💻 Como executar localmente

**Pré-requisitos:** Node.js, npm e uma chave válida da API Google Gemini.

Clone o repositório:

```bash
git clone https://github.com/Andressa-Sim/foodia-ai.git
cd foodia-ai
```

Configure o backend:

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend`:

```env
GEMINI_API_KEY=sua_chave_aqui
```

Inicie o backend conforme os scripts disponíveis no `package.json`.

Em outro terminal, execute o frontend:

```bash
cd frontend-ts
npm install
npm run dev
```

Abra o endereço local informado pelo Vite.

**Segurança:** Nunca publique sua chave de API no GitHub.

## 📱 Interface e responsividade

A interface foi desenvolvida com foco em simplicidade, legibilidade e adaptação a diferentes tamanhos de tela.

O projeto foi testado em ambiente desktop e por meio da simulação de dispositivos móveis no navegador.

## 📋 Organização do desenvolvimento

O projeto utiliza práticas de Scrum com acompanhamento de atividades no Jira, incluindo planejamento, implementação, testes e documentação.

## 🔮 Melhorias futuras

- Histórico de receitas geradas.
- Sistema de receitas favoritas.
- Comparação de preços com dados reais de supermercados.
- Filtros por ingredientes disponíveis em casa.
- Melhorias de acessibilidade.
- Testes automatizados.

## 👩‍💻 Desenvolvedora

**Andressa Alves Simão**

Bacharelado em Sistemas de Informação | Desenvolvimento Web | Full Stack | Inteligência Artificial

- [GitHub](https://github.com/Andressa-Sim)
- [Portfólio](https://andressa-sim.github.io/IPortifolio/)
- [LinkedIn](https://www.linkedin.com/in/andressa-simao)

---

**FoodIA — Tecnologia para ajudar a planejar refeições de forma prática e econômica.**
