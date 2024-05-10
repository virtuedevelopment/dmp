import React from "react";
import styles from "./nav.module.css";
import Image from "next/image";

export default function Header({ title }) {
  return (
    <section className={styles.header}>
      <Image
        src={
          "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
        width={500}
        height={500}
        alt="heading image of suits"
      />
      <h1>{title}</h1>
    </section>
  );
}
