import './App.css'
import Card from './components/Card'
import GameTable from './components/GameTable'

function App() {

  return (
    <>
      <h1>Copa do Mundo Feminina</h1>

      <section className='cards'>
        <Card />
      </section>

      <h2>Tabela de Jogos</h2>
      <section className='gameTable'>
        <GameTable />
      </section>
    </>
  )
}

export default App
