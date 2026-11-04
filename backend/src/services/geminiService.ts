
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
throw new Error("GEMINI_API_KEY não configurada");
}

const ai = new GoogleGenAI({ apiKey });

export async function gerarSugestaoRefeicao(
tipoRefeicao: string,
restricoes: string,
orcamento: number
): Promise<string> {
const prompt = `
Você é um assistente de alimentação chamado FoodIA.

Sugira uma refeição considerando:
- Tipo de refeição: ${tipoRefeicao}
- Restrições alimentares: ${restricoes}
- Orçamento máximo: R$ ${orcamento}

Responda em português, incluindo:
1. Nome da refeição
2. Ingredientes e quantidades
3. Modo de preparo
4. Custo total estimado

Respeite as restrições e o orçamento.
`;

const resposta = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
});

return resposta.text ?? "Não foi possível gerar a sugestão.";
}
