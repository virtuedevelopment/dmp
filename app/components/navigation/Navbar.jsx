"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import MegaMenu from "./MegaMenu";
import { Menu, ShoppingBag, Globe, Minimize2 } from "lucide-react";

export default function Navbar() {
  //states
  const [megaMenuToggle, setMegaMenuToggle] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  //util functions
  const toggleMenu = () => {
    setMegaMenuToggle(!megaMenuToggle);
  };

  return (
    <>
      <MegaMenu state={megaMenuToggle} toggle={toggleMenu} />

      <nav
        className={megaMenuToggle ? styles.menubarsolid : styles.menubar}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button className={styles.menuButton} onClick={toggleMenu}>
          {megaMenuToggle ? <Minimize2 /> : <Menu />}
        </button>

        <Link className={styles.logo} href={"/"}>
          <Image
            id="logo"
            src={megaMenuToggle || isHovering ? "/logo2.svg" : "/logo1.svg"}
            width={100}
            height={50}
            alt="logo"
          />
        </Link>

        <div className={styles.shop}>
          <ShoppingBag />
          <Globe />
        </div>
      </nav>
    </>
  );
}
