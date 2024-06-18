"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import MegaMenu from "./MegaMenu";
import { Menu, ShoppingBag, Minimize2, Headset } from "lucide-react";

export default function Navbar() {
  //states
  const [megaMenuToggle, setMegaMenuToggle] = useState(false);

  //util functions
  const toggleMenu = () => {
    setMegaMenuToggle(!megaMenuToggle);
  };

  return (
    <>
      <aside
        className={megaMenuToggle ? styles.mobileMenu : styles.mobileMenuClosed}
      >
        <button onClick={toggleMenu}>
          <Minimize2 />
        </button>

        <Link onClick={toggleMenu} href={"/"}>
          Home
        </Link>
        <Link onClick={toggleMenu} href={"/about"}>
          About
        </Link>
        <Link onClick={toggleMenu} href={"/catalog"}>
          Catolog
        </Link>
        <Link onClick={toggleMenu} href={"/customize"}>
          Customize
        </Link>
        <Link onClick={toggleMenu} href={"/contact"}>
          Contact
        </Link>
      </aside>

      <nav className={styles.menubar}>
        <button onClick={toggleMenu}>
          <Menu />
        </button>

        <ul className={styles.menu}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/catalog"}>Catalog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        <Link className={styles.logo} href={"/"}>
          <Image
            id="logo"
            src={"/logo2.svg"}
            width={100}
            height={50}
            alt="logo"
          />
        </Link>

        <div className={styles.shop}>
          <Link href={"/customize"}>
            Customize
            <ShoppingBag />
          </Link>
        </div>
      </nav>
    </>
  );
}
