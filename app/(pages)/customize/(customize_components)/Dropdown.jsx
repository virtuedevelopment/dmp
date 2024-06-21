"use client";
import React, { useState, useEffect } from "react";
import styles from "./customize_components.module.css";

import { ChevronUp, ChevronDown } from "lucide-react";

/* this component is a drodpown options selector for the customize suit component */

export default function Dropdown({ options, state, title }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(options[0]);

  //util functions
  const toggle = () => {
    setOpen(!open);
  };
  const selectCurrent = (selected) => {
    setCurrent(selected);
    state(selected);
    toggle();
  };

  return (
    <>
      <div onClick={toggle} className={styles.selector}>
        <span>
        <small>{title}:</small>
        <p>{current}</p>
        </span>

        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      {open && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button onClick={() => selectCurrent(option)} key={option}>
              {option}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
