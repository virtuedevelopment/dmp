import React from "react";
import Link from "next/link";
export default function Logo() {
  return (
    <Link className="logo" href={"/"}>
      <p>Alden</p>
    </Link>
  );
}
