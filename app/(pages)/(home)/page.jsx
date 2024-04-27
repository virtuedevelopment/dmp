import React from "react";
import styles from "./home.module.css";
import Transition from "@/app/components/page/Transition";
import Href from "@/app/components/buttons/Href";

export default function Home() {
  return (
    <Transition>
      <section className={styles.hero}>
        <video
          src={
            "https://videos.pexels.com/video-files/6766332/6766332-uhd_3840_2160_25fps.mp4"
          }
          loop
          autoPlay
          muted
        ></video>
        <h1>
          Handcrafted <br /> Excellence.
        </h1>
        <span style={{ zIndex: "2", marginTop: "0.75rem" }}>
          <Href url={"/"} route={"Customize"} classname={"main-button"} />
        </span>
      </section>

      <section className={styles.featured}></section>

      <section className={styles.magazines}></section>
    </Transition>
  );
}
