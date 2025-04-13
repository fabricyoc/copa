import { useState } from 'react';
import styles from './TournamentBracket.module.css';
import { useEffect } from 'react';
import HeaderComponent from '../HeaderComponent';
import DateTimeComponent from '../DateTimeComponent';
import ScoreComponent from '../ScoreComponent';
import ExtraInfoComponent from '../ExtraInfoComponent';

function TournamentBracket({ fase }) {

  const [jogos, setJogos] = useState([]);
  const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/refs/heads/main/${fase}-copa-2023.json`;

  useEffect(() => {
    const buscarJogos = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setJogos(data);
    }
    buscarJogos();
  }, [url]);

  return (
    <section className={styles.jogos}>
      {
        jogos.map((jogo,index) => (
          <div key={index} className={styles.jogo}>
            <HeaderComponent jogo={jogo} fase={fase} />
            <DateTimeComponent jogo={jogo} />
            <ScoreComponent jogo={jogo} />
            <ExtraInfoComponent jogo={jogo} />
            <h4>
              Vencedor: {jogo.vencedor}
            </h4>
          </div>
        ))
      }
    </section>
  );
}

export default TournamentBracket;
