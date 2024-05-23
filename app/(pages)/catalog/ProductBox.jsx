"use client";
import React, { useState } from "react";
import styles from "./catalog.module.css";
import ProductPeek from "./ProductPeek";
import ProductFocus from "./ProductFocus";

export default function ProductBox({ products }) {
  const [modal, setModal] = useState(false); //modal view
  const [focused, setFocused] = useState(); //product to focus on

  const triggerModal = (product) => {
    setFocused(product);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setFocused(null);
  };

  return (
    <div className={styles.productbox}>
      {modal && <ProductFocus product={focused} closeModal={closeModal} />}
      {products.map((prod) => (
        <ProductPeek key={prod.name} product={prod} focus={triggerModal} />
      ))}
    </div>
  );
}
