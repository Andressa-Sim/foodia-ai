
import "dotenv/config";
import app from "./app";
import "dotenv/config";

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`Servidor FoodIA rodando na porta ${PORT}`);
});
