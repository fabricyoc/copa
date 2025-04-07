import './App.css'
import Card from './components/Card'
import GameTable from './components/GameTable'
import GroupStandings from './components/GroupStandings'
import KnockoutStage from './components/KnockoutStage'

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
        <GroupStandings />
      </section>

      <h2>Oitavas de final</h2>
      <section className='knockoutTable'>
        <KnockoutStage fase='oitavas' />
      </section>
    </>
  )
}

export default App
