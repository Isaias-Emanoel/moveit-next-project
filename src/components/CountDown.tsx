import { useState, useEffect, useContext } from "react";
import { CountDownContext } from "../Contexts/CountDownContext";
import styles from "../styles/components/CountDown.module.css";

export default function CountDown() {
  const {
    minutes,
    seconds,
    hashFineshed,
    isActive,
    startCountdown,
    resetCountDown,
  } = useContext(CountDownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); //quando tiver por exemplo em 5min, o padStar adiciona o 0, aí fica 05min...aí o split continua quebrando em dois

  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split(""); //quando tiver por exemplo em 5min, o padStar adiciona o 0, aí fica 05min...aí o split continua quebrando em dois

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hashFineshed ? (
        <button disabled className={styles.buttonCountdown}>
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountDown}
              type="button"
              className={`${styles.buttonCountdown} ${styles.countDownButtonActive}`}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.buttonCountdown}
            >
              {isActive ? "Abandonar Ciclo" : "Iniciar um ciclo"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
