import { useContext } from "react";
import { ChallengeContext } from "../Contexts/ChallengeContext";
import styles from "../styles/components/LevelUpModal.module.css";

export default function LevelUpModal() {
  const { level, closeModalLevel } = useContext(ChallengeContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>
        <button type="button" onClick={closeModalLevel}>
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  );
}
