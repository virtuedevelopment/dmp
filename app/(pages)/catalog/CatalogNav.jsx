"use client";
import React, { useState } from "react";
import styles from "./catalog.module.css";
import configurations from "@/_data/config";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

export default function CatalogNav({ change }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.options}>
        {configurations.routes.catalogRoutes.map((route, index) => (
          <button key={index} onClick={() => change(route.route)}>
            {route.route} <ArrowUpRight />
          </button>
        ))}
      </div>

      <button className={styles.searchbtn}>
        <Search />
      </button>
    </nav>
  );
}
