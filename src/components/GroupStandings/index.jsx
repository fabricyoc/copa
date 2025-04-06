import { useEffect, useState } from 'react';
import styles from './GroupStandings.module.css';

function GroupStandings() {
  const [grupos, setGrupos] = useState([]);
  const [letraSelecionada, setletraSelecionada] = useState('A');
  const gruposUnicos = [...new Set(grupos.map(grupo => grupo.grupo))];


  useEffect(() => {
    const buscarGrupos = async () => {
      const response = await fetch('https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/classificacao-por-grupos-2023.json');

      const data = await response.json();

      setGrupos(data);
    };
    buscarGrupos();
  }, []);

  return (
    <>
      <div className={styles.divSelect}>
        <select
          value={letraSelecionada}
          onChange={(e) => setletraSelecionada(e.target.value)}
        >
          {
            gruposUnicos.map(grupo => (
              <option value={grupo} key={grupo}>
                Grupo {grupo}
              </option>
            ))
          }
        </select>
      </div >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Seleção</th>
            <th>Pontos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols Pró</th>
            <th>Gols Contra</th>
            <th>Saldo de Gols</th>
          </tr>
        </thead>
        <tbody>
          {
            grupos.filter(grupo =>
              grupo.grupo === letraSelecionada
            ).map(grupo => (
              <tr key={grupo.selecao}>
                <td>{grupo.posicao}</td>
                <td className={styles.esquerda}>{grupo.selecao}</td>
                <td>{grupo.pontos}</td>
                <td>{grupo.vitorias}</td>
                <td>{grupo.empates}</td>
                <td>{grupo.derrotas}</td>
                <td>{grupo.gols_pro}</td>
                <td>{grupo.gols_contra}</td>
                <td>{grupo.saldo_gols}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default GroupStandings;
