import React from "react";
import configurations from "@/_data/config";
import styles from "./footer.module.css";
import Subscribe from "./Subscribe";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.body}>
      <nav className={styles.menugrid}>
        <div className={styles.menubox}>
          <h2>MENU</h2>
          {configurations.routes.mainRoutes.map((route) => (
            <Link key={route.route} href={route.url}>
              {route.route}
            </Link>
          ))}
        </div>
        <div className={styles.menubox}>
          <h2>SHOP</h2>
          {configurations.routes.catalogRoutes.map((route) => (
            <Link key={route.route} href={route.url}>
              {route.route}
            </Link>
          ))}
        </div>
        <div className={styles.menubox}>
          <Subscribe />
        </div>
      </nav>
      <h1>ALDEN SUITS.</h1>
    </footer>
  );
}
