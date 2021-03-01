import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/filipe1309.png" alt="Filipe Leuch Bonfim"/>
      <div>
        <strong>Filipe Leuch Bonfim</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}