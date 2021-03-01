import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { GetServerSideProps } from "next";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownProvider } from "../Contexts/CountDownContext";
import { ChallengesProvider } from "../Contexts/ChallengeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Move it</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //essa funcão deve ser assícrona

  const cookies = ctx.req.cookies;

  const { level, currentExperience, challengesCompleted } = cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
