import './App.css'
import Card from './components/Card'
import Fixture from './components/Fixture'
import GameTable from './components/GameTable'
import GroupStandings from './components/GroupStandings'
import KnockoutStage from './components/KnockoutStage'

function App() {

  return (
    <>
      <h1>Copa do Mundo Feminina</h1>

      {/* <section className='cards'>
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

      <h2>Oitavas de finais</h2>
      <section className='knockoutTable'>
        <KnockoutStage fase='oitavas' />
      </section> */}

      <h2>Jogos do dia 10/08</h2>
      <section className='knockoutTable'>
        <Fixture fase='quartas' data='12/08' />
      </section>

      <h2>Quartas de finais</h2>
      <section className='knockoutTable'>
        <KnockoutStage fase='quartas' />
      </section>

      <h2>Semifinais</h2>
      <section className='knockoutTable'>
        <KnockoutStage fase='semifinais' />
      </section>

      <h2>Finais</h2>
      <section className='knockoutTable'>
        <KnockoutStage fase='finais' />
      </section>
    </>
  )
}

export default App
