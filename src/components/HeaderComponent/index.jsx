import styles from './HeaderComponent.module.css';

function HeaderComponent({ jogo, fase }) {
  return (
    <h2 className={styles.titulo2}>
      {jogo.tipo == "decisão" ? jogo.fase : fase[0].toUpperCase() + fase.substring(1)} {jogo.jogo} - chave {jogo.chave}
    </h2>
  );
}

export default HeaderComponent;
