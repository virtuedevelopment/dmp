import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";

import Transition from "@/app/components/page/Transition";
import Header from "@/app/components/navigation/Header";
import ContactForm from "./ContactForm";
import seo_config from "@/_data/seoConfig";

export const metadata = {
  title: seo_config.contact.title,
  description: seo_config.contact.description,
  keywords: seo_config.contact.keywords,
  ...seo_config.contact.other,
};

export default function Contact() {
  return (
    <Transition>
      <section className={styles.hero}>
        <div className={styles.main}>
          <h1>Book with us.</h1>
          <h4>
            Please let us know if you have any questions or require any
            assistance. We will respond to your message as soon as we can. Thank
            you.
          </h4>
        </div>

        <div className={styles.formbox}>
          <ContactForm />
        </div>
        <span className={styles.white}></span>
      </section>
    </Transition>
  );
}
