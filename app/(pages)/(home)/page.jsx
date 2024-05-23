import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Transition from "@/app/components/page/Transition";
import Href from "@/app/components/buttons/Href";
import { Star } from "lucide-react";

import ProductBox from "../catalog/ProductBox";
import CatalogView from "../catalog/CatalogView";

const reviews = [
  {
    summary: "Great service and ideal perfect fit.",
    full: "Whenever I bought suits they were either too short, too short in the sleeve or imperfect fit around the body. Problem solved with Hockerty, what a great service and an ideal perfect fit each time.",
    name: "Richard gains",
  },
  {
    summary: "My husband Loved his suit!",
    full: "My husband LOVED his suit for the wedding. Usually, it is very tough for him to find suits, as he is tall and slim. However, we could not have been more thrilled with the Hockerty suit. The quality was fabulous and shipment was timely! Thanks so much!",
    name: "Alycia Myers",
  },
  {
    summary: "Great service and ideal perfect fit.",
    full: "Whenever I bought suits they were either too short, too short in the sleeve or imperfect fit around the body. Problem solved with Hockerty, what a great service and an ideal perfect fit each time.",
    name: "Richard gains",
  },
];

export default function Home() {
  return (
    <Transition>
      <section className={styles.hero}>
        <img src="/stock-img06.svg" alt="man in suit" />
        <video src={"/backvid.mp4"} loop autoPlay muted></video>
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
            Since 1884, Alden Suits has epitomized the art of luxury tailoring,
            meticulously handcrafting each piece with the finest materials.
            Renowned for their use of superior wools and silks, their suits
            embody a timeless elegance and unparalleled durability. This
            legendary commitment to quality ensures that every Alden suit is not
            just attire, but a masterpiece of classic sophistication.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            aut cum quam nisi! Recusandae, adipisci, dolorum, modi dolores cum
            est ipsum sit earum omnis doloribus autem incidunt? Voluptates,
            atque obcaecati!
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            aut cum quam nisi! Recusandae, adipisci, dolorum, modi dolores cum
            est ipsum sit earum omnis doloribus autem incidunt? Voluptates,
            atque obcaecati!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            blanditiis enim, delectus omnis fuga adipisci inventore? Dignissimos
            iusto ex, doloribus eum itaque, dolore exercitationem quas,
            consequuntur ratione sit corrupti nostrum.
          </p>
          <Href
            url={"/catalog"}
            route={"Catalog"}
            classname={"secondary-button"}
          />
        </div>
      </section>

      <section className={styles.reviews}>
        <h2>Reviewed by our clients.</h2>
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
