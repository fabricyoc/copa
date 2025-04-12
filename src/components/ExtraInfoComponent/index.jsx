import styles from './ExtraInfoComponent.module.css';

function ExtraInfoComponent({ jogo }) {
  return (
    <div className={styles.tempo_extra}>
      {
        jogo.prorrogacao === "Sim" &&
        <div className={styles.centralizar}>
          <span>
            Prorrogação? {jogo.prorrogacao} | Placar prorrogação: {jogo.placar_prorrogacao}
          </span>
          <span>
            Pênaltis? {jogo.penaltis} | Placar penaltis: {jogo.placar_penaltis}
          </span>
        </div>
      }
    </div>
  );
}

export default ExtraInfoComponent;
