import { FC } from "react";

import Head from "next/head";
import { NavBar } from "../NavBar";

import styles from './MainLayout.module.css'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MainLayout: FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Rodri</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
