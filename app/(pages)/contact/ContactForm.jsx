"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contact.module.css";
import StylistBox from "./StylistBox";

const stylists = [
  {
    img: "/stylists/desouza_mpambu.svg",
    name: "Desouza Mpambu",
    experience: "4 years of Experience",
    description:
      "I’m here to help you to look best and sharp for any occasions.",
  },
];

export default function ContactForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [consultant, setConsultant] = useState(stylists[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const body = {
      firstname,
      lastname,
      subject,
      email,
      message,
      consultant,
    };

    toggleLoading();
    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (result.success) {
        router.push("/thank-you");
      } else {
        setError(result.error || "Failed to submit the form");
      }
    } catch (error) {
      setError("Failed to submit the form");
    } finally {
      toggleLoading();
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.consultant_selector_box}>
        <h2>Select Your Stylist.</h2>
        {stylists.map((stylist, index) => (
          <StylistBox
            key={index}
            stylist={stylist}
            setStylist={setConsultant}
            consultant={consultant}
          />
        ))}
      </div>
      <div className={styles.inputbox}>
        <input
          type="text"
          placeholder="First name"
          required
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className={styles.inputbox}>
        <input
          type="text"
          placeholder="Last name"
          required
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className={styles.inputbox}>
        <input
          type="text"
          placeholder="Subject"
          required
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className={styles.inputbox}>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputbox}>
        <textarea
          placeholder="Message"
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>

      {error && <span className={styles.error}>{error}</span>}
    </form>
  );
}
