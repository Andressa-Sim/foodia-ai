import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [tipoRefeicao, setTipoRefeicao] = useState<string>("");
  const [preferencia, setPreferencia] = useState<string>("");
  const [orcamento, setOrcamento] = useState<number>(0);
  const [sugestao, setSugestao] = useState<string>("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string>("");
  
async function encontrarRefeicoes() {
  if (!tipoRefeicao || !preferencia || orcamento <= 0) {
    alert("Preencha todos os campos e informe um orçamento maior que zero.");
    return;
  }

  setCarregando(true);
  setErro("");
  setSugestao("");

  try {
    const resposta = await fetch("http://localhost:3001/api/refeicoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tipoRefeicao,
        preferenciaAlimentar: preferencia,
        orcamento,
      }),
    });

    if (!resposta.ok) {
      throw new Error("Erro ao gerar sugestão.");
    }

    const dados = await resposta.json();
    setSugestao(dados.sugestao);
  } catch (error) {
    setErro("Não foi possível conectar ao FoodIA. Tente novamente.");
    console.error(error);
  } finally {
    setCarregando(false);
  }
}


  return (
    <main>
        <h1>🍽️ FoodIA</h1>

        <h2>Assistente Inteligente de Refeições</h2>

        <p>
          Descubra refeições de acordo com suas preferências e seu orçamento.
        </p>

        <div className="formulario-refeicao">
          <h2>Encontre sua refeição ideal</h2>

          <div className="campo">
            <label htmlFor="tipo">Tipo de refeição</label>
            <select
              id="tipo"
              value={tipoRefeicao}
              onChange={(e) => setTipoRefeicao(e.target.value)}
            >
              <option value="">Selecione uma refeição</option>
              <option value="cafe">Café da manhã</option>
              <option value="almoco">Almoço</option>
              <option value="jantar">Jantar</option>
              <option value="lanche">Lanche</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="preferencia">Preferência alimentar</label>
            <select
              id="preferencia"
              value={preferencia}
              onChange={(e) => setPreferencia(e.target.value)}
            >
              <option value="">Selecione sua preferência</option>
              <option value="tradicional">Tradicional</option>
              <option value="vegetariana">Vegetariana</option>
              <option value="vegana">Vegana</option>
              <option value="sem-lactose">Sem lactose</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="orcamento">Orçamento disponível (R$)</label>
            <input
              id="orcamento"
              type="number"
              min="0"
              step="0.01"
              placeholder="Ex.: 30,00"
              value={orcamento || ""}
              onChange={(e) => setOrcamento(Number(e.target.value))}
            />
          </div>

          <button type="button" className="botao-encontrar" onClick={encontrarRefeicoes}>
            Encontrar refeições
          </button>
        </div>
        {carregando && <p>Gerando sua refeição...</p>}

{erro && <p className="erro">{erro}</p>}

{sugestao && (
  <section className="resultado">
    <h2>🍽️ Sugestão do FoodIA</h2>
    <ReactMarkdown>{sugestao}</ReactMarkdown>
  </section>
)}
</main>
  );
}

export default App;
