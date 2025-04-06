import './App.css'
import Card from './components/Card'
import GameTable from './components/GameTable'
import GroupStandings from './components/GroupStandings'

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

      <h2>Classificação por grupo</h2>
      <section className='groupTable'>
        <h2>Grupo A</h2>
        <GroupStandings />
      </section>
    </>
  )
}

export default App
