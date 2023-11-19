import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface WordCarouselProps {
  words: string[];
}

const WordCarousel: React.FC<WordCarouselProps> = ({ words }) => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {words.map((word, index) => (
        <div key={index}>
          <p style={{ fontWeight: "600" }}>{word}</p>
        </div>
      ))}
    </Slider>
  );
};

export default WordCarousel;
