"use client";
import React, { useState, useEffect } from "react";
import styles from "./catalog.module.css";
import CatalogLoading from "./CatalogLoading";
import ImgCarousel from "./ImgCarousel";
import { Minimize2, VenetianMask, MoveRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductFocus({ product, closeModal }) {
  //selected styles for customization
  const [selectedMaterial, setSelectedMaterial] = useState(
    product.materials[0]
  ); //material of product
  const [selectedColor, setSelectedColor] = useState(); //color of product
  const [selectedStyle, setSelectedStyle] = useState(); //style of product
  const [additionalInformation, setAdditionalInformation] = useState(); //additonal info
  const [options, setOptions] = useState(); //options for materials
  const [categoryOptions, setCategoryOptions] = useState();

  //steps for submittion form and states for information
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [step, setStep] = useState(1);

  //utility
  const [isLoading, setIsLoading] = useState(false);

  //utility functions
  const getContrastingTextColor = (hexColor) => {
    const rgb = parseInt(hexColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128 ? "black" : "white";
  };

  const submit = async (e) => {
    e.preventDefault();
    setStep(0);
    setIsLoading(true);

    let quoteRequest = {
      item: product.name,
      material: selectedMaterial,
      color: selectedColor,
      info: additionalInformation,
      name: { first: firstname, last: lastname },
      email: email,
      phone: phone,
    };

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quoteRequest }),
      });

      const data = await response.json();

      if (data.success) {
        setStep(3); // Show thank you message
      } else {
        console.error("Failed to send email", data.error);
        // Handle error (show error message, etc.)
      }
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error (show error message, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.modal}>
      <div className={styles.controlbox}>
        <button className={styles.closebtn} onClick={closeModal}>
          <Minimize2 />
        </button>

        <div className={styles.viewbox}>
          {/* <Image src={product.img} width={250} height={250} alt="image" /> */}

          <ImgCarousel images={product.gallery} />

          {step === 1 && (
            <div className={styles.viewSelect}>
              <span className={styles.tag}>{product.category}</span>
              <h2>{product.name}</h2>
              <div className={styles.productDescription}>
                <p>{product.description}</p>
                <small>${product.price}</small>
              </div>

              <h2>Select Material:</h2>
              <div className={styles.materialSelect}>
                {product.materials.map((material, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedMaterial(material);
                      console.log(material);
                    }}
                    className={
                      selectedMaterial?.name === material.name
                        ? styles.selected
                        : ""
                    }
                  >
                    <Image
                      src={material.img}
                      width={200}
                      height={200}
                      alt="image"
                    />
                    <small>{material.name}</small>
                  </button>
                ))}
              </div>

              <h2>Select Color:</h2>
              {selectedMaterial && (
                <div className={styles.clrSelect}>
                  {selectedMaterial.colors.map((clr, index) => (
                    <button
                      style={{
                        backgroundColor: clr.code,
                        color: getContrastingTextColor(clr.code),
                      }}
                      key={index}
                      onClick={() => setSelectedColor(clr.color)}
                      className={
                        selectedColor === clr.color ? styles.selected : ""
                      }
                    >
                      <small>{clr.color}</small>
                    </button>
                  ))}
                </div>
              )}

              <h2>Select Style:</h2>
              <div className={styles.styleSelect}>
                {product.styleOptions.map((style, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedStyle(style)}
                    className={selectedStyle === style ? styles.selected : ""}
                  >
                    <VenetianMask />
                    {style}
                  </button>
                ))}
              </div>

              <h2>Other Specifications:</h2>
              <textarea
                value={additionalInformation}
                placeholder="Additonal notes and specifications"
                onChange={(e) => setAdditionalInformation(e.target.value)}
              ></textarea>

              <button onClick={() => setStep(2)} className={styles.nextbutton}>
                Next <MoveRight />{" "}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.infoSelect}>
              <h2>Personal Information:</h2>

              <form>
                <input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  type="text"
                  placeholder="first name*"
                />
                <input
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  type="text"
                  placeholder="last name*"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="email address*"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type="phone"
                  placeholder="Phone number*"
                />
              </form>

              <div className={styles.buttonbox}>
                <button
                  onClick={() => setStep(1)}
                  className={styles.nextbutton}
                >
                  <MoveLeft /> Previous{" "}
                </button>

                <button onClick={submit} className={styles.nextbutton}>
                  Get Quote <MoveRight />{" "}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.thankyou}>
              <span className={styles.tag}>Completed</span>
              <h2>Thank you for your order {firstname}.</h2>
              <p>
                We are proccessing your quote and will contact you as soon as we
                check our supply. if you have any questions, please{" "}
                <Link href={"/"}>contact us</Link> so we can help you as soon as
                possible.
              </p>
            </div>
          )}

          {isLoading && (
            <div className={styles.loadingbox}>
              <CatalogLoading />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
