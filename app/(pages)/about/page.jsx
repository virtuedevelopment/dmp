import React from "react";
import Transition from "@/app/components/page/Transition";
import Header from "@/app/components/navigation/Header";
import styles from "./about.module.css";
import seo_config from "@/_data/seoConfig";

import Image from "next/image";
import Href from "@/app/components/buttons/Href";

export const metadata = {
  title: seo_config.about.title,
  description: seo_config.about.description,
  keywords: seo_config.about.keywords,
  ...seo_config.about.other,
};

export default function About() {
  return (
    <Transition>
      <header className={styles.header}>
        <big>ABOUT US</big>
        <h1>True Quaility & Elegance.</h1>

        <div className={styles.imagereel}>
          <Image
            src={
              "https://dqp736wsu6w3m.cloudfront.net/s3bucket/w1000/looks/1700/-2024-06-06-12-54-57.jpg"
            }
            width={400}
            height={400}
            alt="header image"
          />

          <Image
            src={
              "https://dqp736wsu6w3m.cloudfront.net/s3bucket/w1000/looks/1687/black-tux-with-bow-tie-2024-06-04-14-34-42.jpg"
            }
            width={400}
            height={400}
            alt="header image"
          />

          <Image
            src={
              "https://d1fufvy4xao6k9.cloudfront.net/looks/1607/navy-blue-blazer-forest-green-chinos-2024-04-25-14-30-10.jpeg"
            }
            width={400}
            height={400}
            alt="header image"
          />

          <Image
            src={
              "https://dqp736wsu6w3m.cloudfront.net/s3bucket/w1000/looks/1682/-2024-06-03-14-39-03.jpg"
            }
            width={400}
            height={400}
            alt="header image"
          />
        </div>
      </header>

      <section className={styles.dmp}>
        <big>
          DMP Collection Prestige, Putting <span>Style</span> and{" "}
          <span>Elegance</span> on <span>Full Display</span>.
        </big>

        <div className={styles.information}>
          <div className={styles.textbox}>
            <h4>Our Establishment</h4>
            <p>
              It has been long established that quality over quantity surpasses
              quantity over quality. However, with modernization that gave life
              to the invention of new fabrics and industrialization that brought
              advancements in the manufacturing of fabrics, the mass production
              made it possible for everyone in the society to have access to a
              diversity of fabrics including the greedy fashionista.
            </p>

            <p>
              The greedy fashionista uses mass production to gain financial
              profit regardless of the low quality and harmful fabrics they
              provide for the society. At DMP Collection, we have found a way to
              keep our customers looking elegant using high-quality fabrics,
              together with exquisite tailoring and a particular attention to
              detail because we believe it is what creates elegance in fashion.
            </p>

            <p>
              We also offer personalized suits and shirts, event stylist
              services, made-to-measure creation, and even image counsel for our
              customers to get the best experience and service.
            </p>

            <Href
              route={"Catalog"}
              url={"/catalog"}
              classname={"transparent"}
            />
          </div>

          <div className={styles.imagebox}>
            <Image
              width={500}
              height={500}
              alt="man in suit"
              src={"/stock-img01.svg"}
            />
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.box}>
          <div className={styles.gridbox}>
            <h3>Our Mission</h3>
            <p>
              Our mission at DMP Collection is to embody excellence in clothing
              by offering our customers an unparalleled bespoke experience. We
              are committed to accompanying our customers every step of the way,
              from start to finish, fulfilling their desires with passion and
              expertise. At DMP Collection, the customers wish is our command.
              We offer an exceptional made-to-measure service, using a wide
              range of quality fabrics to create garments that perfectly reflect
              each individuals unique personality and style
            </p>
          </div>

          <div className={styles.gridbox}>
            <h3>Our Vision </h3>
            <p>
              Our vision at DMP Collection is to become the global benchmark for
              bespoke, present in every region of the globe. We aspire to
              establish our footprint in every corner of the world, offering
              excellent customer service and unparalleled sustainability in
              everything we do. We envision an extensive network of service
              points and production facilities, enabling the DMP Collection
              family to reach far and wide. Our ultimate goal is to become the
              undisputed world leader in the made-to-measure market, redefining
              industry standards and inspiring excellence in every aspect of our
              business.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.imagebox}>
          <Image
            width={500}
            height={500}
            alt="man in suit"
            src={"/stock-img03.svg"}
          />
        </div>

        <div className={styles.infoAlt}>
          <h2>Our Values</h2>
          <p>
            <strong>Loyalty</strong> <br />
            We honor our commitments to our customers and our community,
            building relationships of trust and loyalty that endure over time.
          </p>
          <p>
            <strong>Prestige</strong> <br />
            We strive for excellence and exceptionality in everything we do,
            striving to maintain our reputation as a prestigious and respected
            brand.
          </p>

          <p>
            <strong>Fairness</strong> <br />
            We treat every individual with respect and equality, ensuring that
            our business practices are fair and equitable to all.
          </p>

          <p>
            <strong>Dynamism</strong> <br />
            We embrace energy and enthusiasm in everything we do, constantly
            seeking to innovate and raise industry standards.
          </p>

          <Href
            route={"Customize"}
            url={"/customize"}
            classname={"transparent"}
          />
        </div>
      </section>
    </Transition>
  );
}
