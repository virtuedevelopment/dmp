"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalog.module.css";
import Link from "next/link";
import Image from "next/image";

import CatalogNav from "./CatalogNav";
import CatalogLoading from "./CatalogLoading";
import ProductBox from "./ProductBox";

import products from "@/_data/products";

export default function CatalogView() {
  const [current, setCurrent] = useState(); //current catalog title
  const [catalog, setCatalog] = useState([]); // curent catalog items
  const [filtered, setFiltered] = useState([]); //all filtered elements go here
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCatalog(products);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const filterProds = () => {
      if (current && current === "all") {
        setFiltered(catalog);
      } else if (current) {
        const filteredProducts = catalog.filter(
          (product) => product.category === current
        );
        setFiltered(filteredProducts);
      } else {
        setFiltered(catalog); // If no current category, show all products
      }
    };
    filterProds();
  }, [current, catalog]);

  //update current filters through the different categories and sets it as the current
  const updateCurrent = (filter) => {
    setCurrent(filter);
    console.log(current);
  };

  return (
    <section className={styles.catalog}>
      <CatalogNav change={updateCurrent} />
      {isLoading && <CatalogLoading />}
      {!isLoading && catalog.length > 0 && <ProductBox products={filtered} />}
    </section>
  );
}
