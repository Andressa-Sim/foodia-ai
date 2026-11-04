
import { Request, Response } from "express";
import { gerarSugestaoRefeicao } from "../services/geminiService";

export async function criarRefeicao(req: Request, res: Response) {
    const { tipoRefeicao, preferenciaAlimentar, orcamento } = req.body;

    if (
        typeof tipoRefeicao !== "string" ||
        !tipoRefeicao.trim() ||
        typeof preferenciaAlimentar !== "string" ||
        !preferenciaAlimentar.trim()
    ) {
        return res.status(400).json({
            erro: "Tipo de refeição e preferência alimentar são obrigatórios."
        });
    }

    if (
        typeof orcamento !== "number" ||
        !Number.isFinite(orcamento) ||
        orcamento <= 0
    ) {
        return res.status(400).json({
            erro: "O orçamento deve ser um número maior que zero."
        });
    }

    try {
        const sugestao = await gerarSugestaoRefeicao(
            tipoRefeicao,
            preferenciaAlimentar,
            orcamento
        );

        return res.status(200).json({
            mensagem: "Sugestão gerada com sucesso!",
            sugestao,
        });
    } catch (erro) {
        console.error("Erro ao gerar refeição:", erro);

        return res.status(500).json({
            erro: "Não foi possível gerar a sugestão de refeição.",
        });
    }
}
