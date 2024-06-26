"use client";
import React, { useState, useEffect } from "react";
import styles from "./customize_components.module.css";

export default function OptionView({ option }) {
  const [current, setCurrent] = useState(option);

  useEffect(() => {
    if (option) {
      setCurrent(option);
    }
  }, [option]);

  return (
    <>
      {current && (
        <div className={styles.optionview}>
          <img src={current.img} alt="img" />
          <span className={styles.info}>
            <p>{current.title}</p>
            <small>{current.description}</small>
          </span>
        </div>
      )}
    </>
  );
}
