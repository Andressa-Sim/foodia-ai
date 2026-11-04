
import express from "express";
import cors from "cors";
import refeicoesRoutes from "./routes/refeicoesRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", refeicoesRoutes);

app.get("/health", (req, res) => {
res.status(200).json({
    status: "ok",
    mensagem: "Backend FoodIA funcionando!"
});
});

export default app;
