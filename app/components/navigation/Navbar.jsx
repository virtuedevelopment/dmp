"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import MegaMenu from "./MegaMenu";
import { Menu, ShoppingBag, Globe, Minimize2 } from "lucide-react";

export default function Navbar() {
  //states
  const [megaMenuToggle, setMegaMenuToggle] = useState(false);

  //util functions
  const toggleMenu = () => {
    setMegaMenuToggle(!megaMenuToggle);
  };

  return (
    <>
      <MegaMenu state={megaMenuToggle} toggle={toggleMenu} />

      <nav className={megaMenuToggle ? styles.menubarsolid : styles.menubar}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {megaMenuToggle ? <Minimize2 /> : <Menu />}
        </button>

        <Link className={styles.logo} href={"/"}>
          Alden
        </Link>

        <div className={styles.shop}>
          <ShoppingBag />
          <Globe />
        </div>
      </nav>
    </>
  );
}
