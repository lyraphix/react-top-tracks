import React, { useState } from "react";
import styles from "@/components/active/_imagegallery.module.css";

const images = [
  {
    id: 1,
    src: "postergallery/1.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "postergallery/2.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "postergallery/3.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "postergallery/4.jpg",
    alt: "Image 4",
  },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  function handlePrevClick() {
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
  }

  function handleNextClick() {
    setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
  }

  function handleImageClick() {
    const downloadLink = document.createElement("a");
    downloadLink.href = images[selectedImage].src;
    downloadLink.download = images[selectedImage].alt;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.prev} onClick={handlePrevClick}>
          {"<"}
        </div>
        <img src={images[selectedImage].src} alt={images[selectedImage].alt} onClick={handleImageClick} />
        <div className={styles.next} onClick={handleNextClick}>
          {">"}
        </div>
      </div>
      
    </div>
  );
}

export default ImageGallery;