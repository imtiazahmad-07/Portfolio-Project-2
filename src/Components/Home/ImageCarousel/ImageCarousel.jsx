import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

function ImageCarousel() {
  const images = [
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Foffer-2.png&w=640&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Foffer-1.png&w=640&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=640&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false); 
  const [isHoveredNext, setIsHoveredNext] = useState(false); 

  const nextImage = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image} 
            alt={`Pic ${currentIndex + index + 1}`}
            style={{
              width: "400px",
              height: "200px",
              objectFit: "cover",
              margin: "10px",
              borderRadius: "20px",
            }}
           />
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={prevImage}
        onMouseEnter={() => setIsHoveredPrev(true)}
        onMouseLeave={() => setIsHoveredPrev(false)}
        style={{
          position: "absolute",
          left: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: isHoveredPrev ? "#009F7F" : "rgba(0, 0, 0, 0.5)", 
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "background-color 0.3s ease", 
        }}
      >
        <ArrowLeft />
      </button>

      {/* Next button */}
      <button
        onClick={nextImage}
        onMouseEnter={() => setIsHoveredNext(true)}
        onMouseLeave={() => setIsHoveredNext(false)}
        style={{
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: isHoveredNext ? "#009F7F" : "rgba(0, 0, 0, 0.5)", 
          color: "white",
          border: "none",
          padding: "10px",
          cursor: currentIndex < images.length - 3 ? "pointer" : "not-allowed", 
          borderRadius: "50%",
          transition: "background-color 0.3s ease",
        }}
        disabled={currentIndex >= images.length - 3}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default ImageCarousel;
