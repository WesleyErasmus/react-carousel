import { useState } from "react";
import "./carousel.css";

interface CarouselProps {
    images: string[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slide no. ${currentIndex + 1}`}
        className="carousel-images"
      />
      <div className="slide-handlers">
        <div onClick={previousSlide} className="carousel-button previous">
          {"<"}
        </div>
        <div onClick={nextSlide} className="carousel-button next">
          {">"}
        </div>
      </div>
      <div className="slide-index-dot-container">
        {images.map((_, index: number) => (
          <div
            key={index}
            onClick={() => {
              handleDotClick(index);
            }}
            className={`slide-index-dot ${
              currentIndex === index ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
