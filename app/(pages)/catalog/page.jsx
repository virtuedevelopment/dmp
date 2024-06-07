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
            Step into the world of DMP Collection and explore our exquisite
            range of high-quality fabrics and designs. Our interactive catalog
            allows you to browse through our meticulously curated selection of
            suits and shirts, each crafted to perfection. <br/><br /> With our easy-to-use
            customization options, you can personalize every detail to your
            preference, from fabric choices to unique finishing touches. Whether
            you’re looking for a classic look or a contemporary style, our
            catalog offers endless possibilities to create your ideal garment.
            <br /> <br />
            Experience the convenience and creativity of designing your perfect
            outfit with DMP Collection. View and customize our catalog today to
            begin your journey to sartorial elegance.
          </p>
          <Href
            classname={"mainbutton"}
            route={"Get in touch with us"}
            url={"/contact"}
          />
        </div>
      </header>

      <CatalogView />
    </Transition>
  );
}
