import { useState } from 'react'
import './App.css'
import TournamentBracket from './components/TournamentBracket'

function App() {

  const [activeTab, setActiveTab] = useState('Tab 1');

  function handleChangeTab(tabName) {
    setActiveTab(tabName);
  }

  function renderTabContent() {
    switch (activeTab) {
      case 'Tab 1':
        return <TournamentBracket fase='semifinais' />;
      case 'Tab 2':
        return <TournamentBracket fase='quartas' />;
      case 'Tab 3':
        return <TournamentBracket fase='oitavas' />;
      default:
        break;
    }
  }

  return (
    <>
      <h1>Copa do Mundo Feminina</h1>

      <section className='knockoutTable'>
        <div className='tabs'>
          <button
            className={activeTab === 'Tab 1' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 1')}
          >
            Semifinais
          </button>
          <button
            className={activeTab === 'Tab 2' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 2')}
          >
            Quartas
          </button>
          <button
            className={activeTab === 'Tab 3' ? 'active' : ''}
            onClick={() => handleChangeTab('Tab 3')}
          >
            Oitavas
          </button>
        </div>

        <div className='tab_content'>
          {renderTabContent()}
        </div>

      </section>
    </>
  )
}

export default App
