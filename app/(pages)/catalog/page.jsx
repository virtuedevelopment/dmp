import React from "react";
import styles from "./catalog.module.css";
import Transition from "@/app/components/page/Transition";
import Href from "@/app/components/buttons/Href";

import CatalogView from "./CatalogView";

export default function Catalog() {
  //catalog header x

  //catalog menu x

  //open items display x

  //pop up modal for getting quote

  return (
    <Transition>
      <header className={styles.header}>
        <div className={styles.infobox}>
          <h1>Custom suits.</h1>
          <p>
            Are you looking for a custom suit that will enhance your looks and
            style? Hockerty has the answer! Our suits are not only high-quality
            but they are also tailored entirely to your measurements. Choose
            from more than 150 fabrics and various details to design your own
            look. We guarantee the perfect fit of your tailored Hockerty suit.
          </p>
          <Href
            classname={"mainbutton"}
            route={"Customize"}
            url={"/customize"}
          />
        </div>
      </header>

      <CatalogView />
    </Transition>
  );
}
