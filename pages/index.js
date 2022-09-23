import Head from "next/head";
import Image from "next/image";
import styles from "../styles/css/test.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.test}>This is Super Coach</h1>
      </div>
    </div>
  );
}
