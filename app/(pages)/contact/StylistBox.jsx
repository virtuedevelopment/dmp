"use client";
import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";

export default function StylistBox({ stylist, setStylist, consultant }) {
  const [selected, setSelected] = useState(false);

  const select = () => {
    setStylist(stylist);
  };

  const selectedStyle = {
    border: "solid 0.5px var(--color-secondary)",
    boxShadow: "var(--box-shadow-heavy)",
  };

  useEffect(() => {
    setSelected(consultant.name === stylist.name);
  }, [consultant, stylist.name]);

  return (
    <button
      onClick={select}
      style={selected ? selectedStyle : {}}
      className={styles.stylist}
    >
      <img src={stylist.img} alt="stylist" />
      <big>{stylist.name}</big>
      <p>{stylist.experience}</p>
      <small>{stylist.description}</small>
    </button>
  );
}
