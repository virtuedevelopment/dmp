"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [firstname, setFirstname] = useState();
  const [lastname, setLasttname] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  //utility functions
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const submit = (e) => {
    e.preventDefault();
    const body = {
      firstname,
      lastname,
      subject,
      email,
      message,
    };

    console.log(body);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
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
    </form>
  );
}
