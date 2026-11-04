
import { Request, Response } from "express";

export function criarRefeicao(req: Request, res: Response) {
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
return res.status(200).json({
    mensagem: "Dados recebidos com sucesso!",
    dados: {
    tipoRefeicao: tipoRefeicao.trim(),
    preferenciaAlimentar: preferenciaAlimentar.trim(),
    orcamento: orcamento
    }
});
}
