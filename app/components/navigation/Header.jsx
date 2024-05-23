import React from "react";
import styles from "./nav.module.css";
import Image from "next/image";

export default function Header({ title }) {
  return (
    <section className={styles.header}>
      <Image
        src={"/stock-img05.svg"}
        width={500}
        height={500}
        alt="heading image of suits"
      />
      <h1>{title}</h1>
    </section>
  );
}
