"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { MoveRight, Instagram, Facebook } from "lucide-react";

export default function Subscribe() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState(""); // form state
  const [error, setError] = useState(""); // for email regex
  const [isLoading, setIsLoading] = useState(false); //loading state

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

    setIsLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setIsLoading(false);
      } else {
        setError(result.error || "Failed to subscribe");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Failed to subscribe");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <label> SUBSCRIBE TO RECEIVE NEW DEALS </label>
      <div className="inputbox">
        <input
          type="text"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : <MoveRight />}
        </button>
      </div>
      {success && (
        <span className={styles.success}>Successfully Signed up</span>
      )}
      {error && <span className={styles.error}>{error}</span>}
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
