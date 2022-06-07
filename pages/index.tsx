import axios from "axios";

import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [returnText, setReturnText] = useState("");

  const onClickRequest = () => {
    axios
      .get(
        "http://localhost:5001/sample-functions-70b90/us-central1/helloWorld"
      )
      .then((res) => {
        setReturnText(res.data);
      });
  };

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
        <div className={styles.description}>{returnText}</div>
        <button onClick={onClickRequest}>request</button>
        <button onClick={() => setReturnText("")}>clear</button>
      </main>
    </div>
  );
};

export default Home;
