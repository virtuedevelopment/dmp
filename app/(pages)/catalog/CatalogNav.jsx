"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalog.module.css";
import configurations from "@/_data/config";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import ProductFocus from "./ProductFocus";


function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function CatalogNav({ change }) {

  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch catalog
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

  // Debounce the search input
  const handleSearch = debounce((value) => {
    if (value.length > 2) {
      setFilteredCatalog(
        catalog.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, 300);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowDropdown(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.options}>
        {configurations.routes.catalogRoutes.map((route, index) => (
          <button key={index} onClick={() => change(route.route)}>
            {route.route} <ArrowUpRight />
          </button>
        ))}
      </div>

      <div className={styles.searchbox}>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />

        <button className={styles.searchbtn}>
          <Search />
        </button>

        {showDropdown && (
          <div className={styles.dropdown}>
            {filteredCatalog.map((product, index) => (
              <button
                key={index}
                className={styles.item}
                onClick={() => handleProductClick(product)}
              >
                <img src={product.img} alt={product.name} />
                <small>{product.name}</small>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductFocus product={selectedProduct} closeModal={closeModal} />
      )}
    </nav>
  );
}
