import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Href({ route, url, classname, toggle }) {
  return (
    <Link onClick={toggle} className={classname} href={url}>
      <p>{route}</p>
      <ArrowUpRight />
    </Link>
  );
}
