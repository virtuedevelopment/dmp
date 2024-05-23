import React from "react";
import Transition from "@/app/components/page/Transition";
import Header from "@/app/components/navigation/Header";
import styles from "./about.module.css";

import Image from "next/image";
import Href from "@/app/components/buttons/Href";

export default function About() {
  return (
    <Transition>
      <Header title={"About Us."} />

      <section className={styles.history}>
        <div className={styles.info}>
          <h2>DMP Collection.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ex odit maxime ipsum eum, culpa laboriosam velit? Quam voluptate
            assumenda consequatur quasi quisquam dolor corporis iste,
            exercitationem, eius explicabo autem!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            blanditiis omnis porro aliquid praesentium magnam eum aut quidem
            repudiandae, hic quasi officia commodi doloremque maiores incidunt
            deleniti est unde quia.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            blanditiis omnis porro aliquid praesentium magnam eum aut quidem
            repudiandae, hic quasi officia commodi doloremque maiores incidunt
            deleniti est unde quia.
          </p>

          <Href
            route={"Customize"}
            url={"/catalog"}
            classname={"transparent"}
          />
        </div>

        <div className={styles.imagebox}>
          <Image
            width={500}
            height={500}
            alt="man in suit"
            src={
              "https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
          />
        </div>
      </section>

      <section className={styles.alden}>
        <h2>
          DMP Collection Prestige, Putting Style and Elegance on Full Display.
        </h2>

        <div className={styles.about}>
          <div className={styles.gridbox}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className={styles.gridbox}>
            <Image
              src={
                "https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              width={500}
              height={500}
              alt="man in suit 2"
            />
          </div>
          <div className={styles.gridbox}>
            <p style={{ textAlign: "right" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </section>

      <section className={styles.more}>
        <h2>
          Still a family owned business, still carrying forward a tradition of
          quality genuine-welted shoemakingthat is exceptional in every way.
        </h2>
        <div className={styles.container}>
          <Image
            src={
              "https://images.pexels.com/photos/2767159/pexels-photo-2767159.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            width={500}
            height={500}
            alt="man in suit"
          />

          <div className={styles.infobox}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <Href
              route={"Contact Us"}
              url={"/contact"}
              classname={"transparent"}
            />
          </div>
        </div>
      </section>
    </Transition>
  );
}
