import styles from "./page.module.css";

import Header from "fitness/components/Header";
import Footer from "fitness/components/Footer";
import Body from "fitness/components/Body";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
