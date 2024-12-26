import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

function FurnitureCarousel() {
  const images = [
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F923%2Ffurniture-banner-2.jpg&w=3840&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F922%2Ffurniture-banner-1.jpg&w=3840&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F923%2Ffurniture-banner-2.jpg&w=3840&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F922%2Ffurniture-banner-1.jpg&w=3840&q=75",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300); 
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300); 
  };

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
       
        <img
          src={images[currentIndex]}
          alt={`Pic ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            margin: "10px",
            borderRadius: "20px",
            opacity: fade ? 0 : 2,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </div>

      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default FurnitureCarousel;
