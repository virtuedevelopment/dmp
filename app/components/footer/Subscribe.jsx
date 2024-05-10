"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./footer.module.css";
import Link from "next/link";
import { MoveRight, Instagram, Facebook } from "lucide-react";

export default function Subscribe() {
  const router = useRouter();
  const [email, setEmail] = useState(""); // form state
  const [error, setError] = useState(""); // for email regex
  const [isLoading, setIsLoading] = useState(false); //loading state

  //submit form

  const subscribe = async (mail) => {
    //supabase return boolean
  };

  const emailRegex = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); // Simple regex for email validation
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!emailRegex(email)) {
      setError("Something wrong with email");
      return;
    }

    let response = await subscribe(email);

    if (response) {
      router.push("/subscribe");
    } else {
      setError("Failed to subscribe"); // Handle failed subscription
    }
  };

  return (
    <form onSubmit={submit}>
      <label> SUBSCRIBE TO RECIEVE NEW DEALS </label>
      <div className="inputbox">
        <input type="text" required placeholder="Your email" />
        <button type="submit">
          <MoveRight />
        </button>
      </div>
      <div className={styles.socialbox}>
        <Link href={"/"}>
          <Instagram />
        </Link>

        <Link href={"/"}>
          <Facebook />
        </Link>
      </div>
    </form>
  );
}
