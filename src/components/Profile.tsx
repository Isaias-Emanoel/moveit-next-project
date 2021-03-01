import { useContext } from "react";
import { ChallengeContext } from "../Contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Isaias-Emanoel.png" alt="" />
      <div>
        <strong>Isaias Emanoel </strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
