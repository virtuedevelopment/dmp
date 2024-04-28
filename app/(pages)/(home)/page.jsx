import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Transition from "@/app/components/page/Transition";
import Href from "@/app/components/buttons/Href";

export default function Home() {
  return (
    <Transition>
      <section className={styles.hero}>
        <video src={"/backvid.mp4"} loop autoPlay muted></video>
        <h1>
          Handcrafted <br /> Excellence.
        </h1>
        <span style={{ zIndex: "2", marginTop: "0.75rem" }}>
          <Href url={"/"} route={"Customize"} classname={"main-button"} />
        </span>
      </section>

      <section className={styles.material}>
        <div className={styles.info}>
          <h3>High Quality Materials.</h3>
          <p className={styles.text}>
            Since 1884, Alden Suits has epitomized the art of luxury tailoring,
            meticulously handcrafting each piece with the finest materials.
            Renowned for their use of superior wools and silks, their suits
            embody a timeless elegance and unparalleled durability. This
            legendary commitment to quality ensures that every Alden suit is not
            just attire, but a masterpiece of classic sophistication.
          </p>
          <Href url={"/"} route={"Catalog"} classname={"secondary-button"} />
        </div>

        <Image src={"/material.svg"} width={500} height={500} alt="material" />
      </section>

      <section className={styles.featured}></section>

      <section className={styles.magazines}>
        <h3 style={{ fontWeight: "100" }}>VOGUE</h3>
        <h3>Forbes</h3>
        <h3 style={{ fontWeight: "100" }}>VOGUE</h3>
        <h3>Forbes</h3>
      </section>
    </Transition>
  );
}
