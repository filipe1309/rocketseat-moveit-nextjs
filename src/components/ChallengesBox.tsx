import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengesBox.module.css'

export default function ChallengesBox() {
    // const { startNewChallenge } = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return (
      <div className={styles.challengesBoxContainer}>
        { hasActiveChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe 400 xp</header>

            <main>
              <img src="icons/body.svg" alt="Body"/>
              <strong>Novo desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailButton}
              >Falhei</button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
              >Completei</button>
            </footer>
          </div>
        ): (
          <div className={styles.challengesNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up"/>
              Avance de level completando desafios
            </p>
          </div>
        )}
      </div>
    );
}