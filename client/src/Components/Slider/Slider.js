import React, { useEffect, useState } from "react";
import { sliderData } from "./sliderData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slider.css";
export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const autoScroll = true;
  const sliderLength = sliderData.length;

  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlider(
      currentSlider === sliderLength - 1 ? 0 : currentSlider + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlider(
      currentSlider === 0 ? sliderLength - 1 : currentSlider - 1
    );
  };

  useEffect(() => {
    setCurrentSlider(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
          // eslint-disable-next-line
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlider, autoScroll, slideInterval]);
  return (
    <div>
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlider ? "slide current" : "slide"}
          >
            {index === currentSlider && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
