"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalog.module.css";
import Link from "next/link";
import Image from "next/image";

import CatalogNav from "./CatalogNav";
import CatalogLoading from "./CatalogLoading";
import ProductBox from "./ProductBox";

export default function CatalogView() {
  const [current, setCurrent] = useState(); //current catalog title
  const [catalog, setCatalog] = useState([]); // curent catalog items
  const [filtered, setFiltered] = useState([]); //all filtered elements go here
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/virtuedevelopment/3f2f9b101adf84c6620ab7a164ecfd09/raw/a878d24ff622322472c89052b8e6f25215ef0847/test_products.json"
      );
      const products = await response.json();
      setCatalog(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (catalog.length > 0) {
      setIsLoading(false);
    }
  }, [catalog, isLoading]);

  useEffect(() => {
    const filterProds = async () => {
      // Check categories of each item in catalog
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

  //update current filters through the diffeerent categories and sets it as the current
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
