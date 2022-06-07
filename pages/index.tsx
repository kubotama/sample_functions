import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>sample page of Cloud Functions for Firebase</title>
        <meta
          name="description"
          content="sample page of Cloud Functions for Firebase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          sample page of Cloud Functions for Firebase
        </h1>
      </main>
    </div>
  );
};

export default Home;
