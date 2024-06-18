"use client";
import React from "react";
import styles from "./nav.module.css";
import Image from "next/image";
import configurations from "@/_data/config";
import Href from "../buttons/Href";

export default function MegaMenu({ state, toggle }) {
  return (
    <section className={state ? styles.megamenu : styles.megamenuclosed}>
      <div className={styles.megamenulist}>
        <div className={styles.mainmenu}>
          <h1>Main Menu</h1>
          {configurations.routes.mainRoutes.map((page) => (
            <Href
              key={page.url}
              url={page.url}
              route={page.route}
              classname={"menulink"}
              toggle={toggle}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
