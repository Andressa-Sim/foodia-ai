
import { Router } from "express";
import { criarRefeicao } from "../controllers/refeicoesController";

const router = Router();

router.post("/refeicoes", criarRefeicao);

export default router;
