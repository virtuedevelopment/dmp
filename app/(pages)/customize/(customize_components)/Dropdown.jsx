"use client";
import React, { useState, useEffect } from "react";
import styles from "./customize_components.module.css";
import { ChevronUp, ChevronDown } from "lucide-react";

/* this component is a dropdown options selector for the customize suit component */

export default function Dropdown({ options, state, title, selected }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(selected);

  useEffect(() => {
    setCurrent(selected);
  }, [selected]);

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.75rem",
          }}
        >
          <img
            style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            src={current.img}
            alt="current selected"
          />
          <span>
            <small>{title}:</small>
            <p>{current.title}</p>
          </span>
        </div>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      {open && (
        <div className={styles.dropdown}>
          {options.map((option, index) => (
            <button onClick={() => selectCurrent(option)} key={index}>
              <span className={styles.dropdown_info}>
                <p>{option.title}</p>
                <small>{option.description}</small>
              </span>
              <img src={option.img} alt="img" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
