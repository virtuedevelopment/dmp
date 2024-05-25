import React from "react";
import Link from "next/link";
import styles from './buttons.module.css'
import { ArrowUpRight } from "lucide-react";

export default function Href({ route, url, classname, toggle }) {
  return (
    <Link onClick={toggle} className={styles[classname]} href={url}>
      {route}
      <ArrowUpRight strokeWidth={1} />
    </Link>
  );
}
