import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../NavBar";

import styles from './MainLayout.module.css'

export const MainLayout = ({children}) => {
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
