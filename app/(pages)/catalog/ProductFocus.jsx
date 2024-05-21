"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalog.module.css";
import { Minimize2 } from "lucide-react";
import Image from "next/image";

export default function ProductFocus({ product, closeModal }) {
  //selected styles for customization
  const [selectedMaterial, setSelectedMaterial] = useState(); //material of product
  const [selectedColor, setSelectedColor] = useState(); //color of product
  const [selectedStyle, setSelectedStyle] = useState(); //style of product
  const [price, setPrice] = useState(0); //set price for the additonal features
  const [options, setOptions] = useState(); //options for materials

  //utility functions

  // Fetch materials
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/virtuedevelopment/a448ca4d174d09cc817d08cec690e104/raw/21699c93d680c6b5c31426be9032ab356c85dc0c/materials.json"
        );
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <section className={styles.modal}>
      <div className={styles.controlbox}>
        <button className={styles.closebtn} onClick={closeModal}>
          <Minimize2 />
        </button>

        <div className={styles.viewbox}>
          <Image src={product.img} width={250} height={250} alt="image" />

          <div className={styles.viewSelect}>
            <span className={styles.tag}>{product.category}</span>
            <h2>{product.name}</h2>
            <div className={styles.productDescription}>
              <p>{product.description}</p>
              <small>${product.price}</small>
            </div>

            <h2>Select Material:</h2>
            {options && (
              <div className={styles.materialSelect}>
                {options.map((material, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMaterial(material)}
                  >
                    <Image
                      src={material.image}
                      width={200}
                      height={200}
                      alt="image"
                    />
                    <small>{material.material}</small>
                  </button>
                ))}
              </div>
            )}

            <h2>Select Color:</h2>
            {options && selectedMaterial && (
              <div className={styles.clrSelect}>
                {selectedMaterial.colors.map((clr, index) => (
                  <button
                    style={{ backgroundColor: `${clr.code}` }}
                    key={index}
                  >
                    <small>{clr.color}</small>
                  </button>
                ))}
              </div>
            )}

            <h2>Select Style:</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
