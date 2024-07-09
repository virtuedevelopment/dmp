import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Transition from "@/app/components/page/Transition";
import Href from "@/app/components/buttons/Href";
import { Star } from "lucide-react";

import ProductBox from "../catalog/ProductBox";
import CatalogView from "../catalog/CatalogView";
import seo_config from "@/_data/seoConfig";

export const metadata = {
  title: seo_config.home.title,
  description: seo_config.home.description,
  keywords: seo_config.home.keywords,
  ...seo_config.home.other,
};

const reviews = [
  {
    summary: "Great service and ideal perfect fit.",
    full: "Whenever I bought suits they were either too short, too short in the sleeve or imperfect fit around the body. Problem solved with DMP, what a great service and an ideal perfect fit each time.",
    name: "Richard gains",
  },
  {
    summary: "My husband Loved his suit!",
    full: "My husband LOVED his suit for the wedding. Usually, it is very tough for him to find suits, as he is tall and slim. However, we could not have been more thrilled with the DMP suit. The quality was fabulous and shipment was timely! Thanks so much!",
    name: "Alycia Myers",
  },
  {
    summary: "Wonderful suits, even better service.",
    full: "I bought 3 suits to add to my wardrobe and getting a chance to customize everything down to the Material is amazing! DMP really made it easy for us with their quick communication and amazing customer service! Good job guys.",
    name: "Jason Price",
  },
];

export default function Home() {
  return (
    <Transition>
      <section className={styles.hero}>
        <img src="/stock-img06.svg" alt="man in suit" />

        <h1>
          Handcrafted <br /> Excellence.
        </h1>

        <span style={{ zIndex: "2", marginTop: "0.75rem" }}>
          <Href url={"/catalog"} route={"Customize"} classname={"mainbutton"} />
        </span>
      </section>

      <section className={styles.material}>
        <div className={styles.info}>
          <h3>High Quality Materials.</h3>
          <p className={styles.text}>
            At DMP Collection, we prioritize quality over quantity, embracing
            the advancements in modern fabrics and manufacturing to provide you
            with the finest materials. Unlike mass producers who compromise
            quality for profit, we are committed to elegance and excellence. Our
            high-quality fabrics, exquisite tailoring, and meticulous attention
            to detail ensure that our customers look and feel their best. <br />
            <br /> We offer personalized suits and shirts, event stylist
            services, made-to-measure creations, and image counsel, delivering a
            sophisticated and exceptional experience tailored to your needs.
          </p>
          <Href
            url={"/about"}
            route={"About Us"}
            classname={"secondary-button"}
          />
        </div>

        <Image src={"/material.svg"} width={500} height={500} alt="material" />
      </section>

      <section className={styles.featured}>
        <Image
          className={styles.back}
          src={"featured_img.svg"}
          width={300}
          height={500}
          alt="suit model"
        />
        <Image
          className={styles.front}
          src={"man.svg"}
          width={300}
          height={500}
          alt="suit model"
        />

        <div className={styles.infoboxmain}>
          <h3>Experience.</h3>
          <p>
            At DMP Collection, elegance is more than just a word—it is a
            promise. From the moment you step into our store, you are enveloped
            in an atmosphere of sophistication and luxury. Our team of skilled
            artisans and stylists are dedicated to crafting garments that not
            only fit perfectly but also reflect your unique style and
            personality.
          </p>
          <span style={{ zIndex: "2" }}>
            <Href
              url={"/catalog"}
              route={"Catalog"}
              classname={"secondary-button"}
            />
          </span>
        </div>

        <div className={styles.infoboxsub}>
          <h3>Elegance.</h3>
          <p>
            With our bespoke tailoring, personalized service, and attention to
            every detail, we ensure that each piece we create is a masterpiece.
            Experience the refined craftsmanship and unparalleled quality that
            define DMP Collection. Discover the true essence of elegance with
            our meticulously designed suits and shirts, tailored just for you.
          </p>
          <Href
            url={"/contact"}
            route={"Contact Us"}
            classname={"secondary-button"}
          />
        </div>

        <div className={styles.mobileinfo}>
          <h3>Experience Elegance.</h3>
          <p>
            At DMP Collection, elegance is more than just a word—it is a
            promise. From the moment you step into our store, you are enveloped
            in an atmosphere of sophistication and luxury. Our team of skilled
            artisans and stylists are dedicated to crafting garments that not
            only fit perfectly but also reflect your unique style and
            personality.
          </p>
          <Href
            url={"/catalog"}
            route={"Catalog"}
            classname={"secondary-button"}
          />
        </div>
      </section>

      <section className={styles.reviews}>
        <h3>Reviewed by our clients.</h3>
        <div className={styles.reviewbox}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <h4>{review.summary}</h4>
              <p>{review.full}</p>
              <small>{review.name}</small>
            </div>
          ))}
        </div>
      </section>
    </Transition>
  );
}
