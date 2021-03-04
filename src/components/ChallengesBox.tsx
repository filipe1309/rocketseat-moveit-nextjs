import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengesBox.module.css'

export default function ChallengesBox() {
    const { activeChallenge, resetChallenge, completeChalllenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
      completeChalllenge();
      resetCountdown();
    }

    function handleChallengeFailed() {
      resetChallenge();
      resetCountdown();
    }

    return (
      <div className={styles.challengesBoxContainer}>
        { activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe { activeChallenge.amount } xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailButton}
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
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