import { Header } from './components/Header';
import styles from './App.module.css';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';

export function App() {

  function handleRestartGame() {
    alert('Reiniciar o jogo!');
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de programação dinâmica" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
      </main>
    </div>
  )
}
