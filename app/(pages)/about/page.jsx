import React from "react";
import Transition from "@/app/components/page/Transition";
import Header from "@/app/components/navigation/Header";
import styles from "./about.module.css";

export default function About() {
  return (
    <Transition>
      <Header title={'About Us.'} />
      <section>ABOUT US</section>
    </Transition>
  );
}
