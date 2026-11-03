import './App.css'

function App() {
  return (
    <>
      <style>{`
        body {
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.35),
              rgba(0, 0, 0, 0.55)
            ),
            url('/foodia-bg.png');

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          min-height: 100vh;
        }

        main {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <main>
        <h1>🍽️ FoodIA</h1>

        <h2>Assistente Inteligente de Refeições</h2>

        <p>
          Descubra refeições de acordo com suas
          preferências e seu orçamento.
        </p>

        <button type="button">
          Encontrar refeição
        </button>
      </main>
    </>
  )
}

export default App
