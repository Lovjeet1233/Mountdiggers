import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "https://i.postimg.cc/v8Vb0hmk/DSC06879.jpg", // Provided image
    "https://i.postimg.cc/sgpz3gWc/IMG-0690.avif", // Provided image
    "https://i.postimg.cc/L5Ydw9Rj/IMG-20240929-131941182-HDR-AE.jpg", // Provided image
    "https://i.postimg.cc/gkhFK2gW/20240107-115011.avif", // Provided image
    "https://i.postimg.cc/9fJvfRQG/IMG-0453.jpg", // Provided image

  ];

  return (
    <div className="gallery-scattered-container">
      {images.map((image, index) => (
        <div key={index} className={`gallery-scattered-item item-${index + 1}`}>
          <img src={image} alt={`Gallery ${index}`} className="gallery-img" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
