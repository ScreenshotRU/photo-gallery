import React, { useState, useRef, useEffect } from 'react';
import SliderComponent from '../Components/SliderComponent';
import PropTypes from 'prop-types';

const Slider = ({images, currentIndex, margin, show}) => {
  const [currentSlides, setCurrentSlides] = useState(show);
  const [translateX, setTranslateX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const cardRef = useRef(null);
  const dataAfter = images.slice(currentIndex);
  const dataBefore = images.slice(0, currentIndex);
  const data = dataAfter.concat(dataBefore);

  useEffect(() => {
    const cardWidth =
      cardRef.current.getBoundingClientRect().width + margin;
    setSliderWidth(cardWidth * show - margin);
  }, []);

  const toggleSlide = (direction) => {
    cardRef.current.getBoundingClientRect();
    const cardWidth =
      cardRef.current.getBoundingClientRect().width + margin;
    if (cardRef.current) {
      if (direction === 'right' && images.length > currentSlides) {
        setCurrentSlides(currentSlides + 1);
        setTranslateX(translateX - cardWidth);
      } else if (direction === 'left' && currentSlides > show) {
        setCurrentSlides(currentSlides - 1);
        setTranslateX(translateX + cardWidth);
      } else if (
        direction === 'right' &&
        currentSlides >= images.length
      ) {
        setCurrentSlides(show);
        setTranslateX(0);
      } else if (direction === 'left' && currentSlides <= show) {
        setCurrentSlides(images.length);
        setTranslateX(-(cardWidth * (images.length - show)));
      }
    }
  };

  return (
    <SliderComponent
      sliderWidth={sliderWidth}
      toggleSlide={toggleSlide}
      translateX={translateX}
      data={data}
      cardRef={cardRef}
      margin={margin}
    />
  );
};

SliderComponent.defaultProps = {
  images: [],
  currentIndex: 0,
  margin: 0,
  show: 1,
};

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      albumId: PropTypes.number,
      url: PropTypes.string,
      title: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
  show: PropTypes.number,
  margin: PropTypes.number,
  currentIndex: PropTypes.number,
};

export default Slider;
