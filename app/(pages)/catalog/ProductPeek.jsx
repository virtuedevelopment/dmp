import React from "react";
import styles from "./catalog.module.css";
import Image from "next/image";

export default function ProductPeek({ product, focus }) {
  return (
    <button className={styles.peek} onClick={() => focus(product)}>
      <span>{product.category}</span>
      <Image src={product.img} width={250} height={250} alt="prod-peek" />
      <div className={styles.info}>
        <p>{product.name}</p>
        <small>${product.price}</small>
      </div>
    </button>
  );
}
