"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./catalog.module.css";

export default function ImgCarousel({ images }) {
  const [current, setCurrent] = useState(images[0]); // Current image url
  const [otherImages, setOtherImages] = useState(images.slice(1)); // Other images

  const handleImageClick = (newImage) => {
    setOtherImages([
      current,
      ...otherImages.filter((image) => image !== newImage),
    ]);
    setCurrent(newImage);
  };

  return (
    <div className={styles.gallerybox}>
      <Image
        className={styles.current}
        width={250}
        height={250}
        alt="image"
        src={current}
      />
      <div className={styles.selectionbox}>
        {otherImages.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className={styles.imageButton}
          >
            <Image width={50} height={50} alt={`image-${index}`} src={image} />
          </button>
        ))}
      </div>
    </div>
  );
}
