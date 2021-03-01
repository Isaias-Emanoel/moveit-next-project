import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengeContext } from "../Contexts/ChallengeContext";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hashFineshed: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode; //aceita qualquer coisa
}
let countDowntTimeOut: NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(25 * 60); //25 minutos;
  const [isActive, setIsActive] = useState(false);
  const [hashFineshed, setHashFineshed] = useState(false);
  const minutes = Math.floor(time / 60); //arredonda 24.56 para 24
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }
  function resetCountDown() {
    clearTimeout(countDowntTimeOut);
    setIsActive(false);
    setTime(25 * 60);
    setHashFineshed(false);
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countDowntTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHashFineshed(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); //primeiro parametro é o que eu quero executar, o segundo é quando eu quero executar
  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hashFineshed,
        isActive,
        startCountdown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
