"use client";
import React, { useState } from "react";
import styles from "./catalog.module.css";
import { Minimize2 } from "lucide-react";

export default function ProductFocus({ product, closeModal }) {
  return (
    <section className={styles.modal}>
      <div className={styles.controlbox}>
        <button className={styles.closebtn} onClick={closeModal}>
          <Minimize2 />
        </button>
      </div>
    </section>
  );
}
