import './App.css'
import TournamentBracket from './components/TournamentBracket'

function App() {

  return (
    <>
      <h1>Copa do Mundo Feminina</h1>

      <section className='knockoutTable'>

        <h2>Finais</h2>
        <TournamentBracket fase='finais' />

        <h2>Semifinais</h2>
        <TournamentBracket fase='semifinais' />

        <h2>Quartas</h2>
        <TournamentBracket fase='quartas' />

        <h2>Oitavas</h2>
        <TournamentBracket fase='oitavas' />
      </section>
    </>
  )
}

export default App
