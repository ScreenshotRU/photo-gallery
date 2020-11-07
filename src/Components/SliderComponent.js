import React from 'react';
import PropTypes from 'prop-types';
import { ScrollContainer, SliderWrap, Card, NavButton } from '../Styled';

const SliderComponent = ({sliderWidth, toggleSlide, translateX, data, cardRef, margin}) => {
  return (
    <ScrollContainer width={sliderWidth}>
      <NavButton
        position="left"
        onClick={() => toggleSlide('left')}
      >{`<`}</NavButton>
      <SliderWrap translateX={translateX}>
        {data.map((image) => (
          <Card key={image.id} ref={cardRef} margin={margin}>
            <img src={image.url} alt="SliderComponent" />
            <span>{image.title}</span>
          </Card>
        ))}
      </SliderWrap>
      <NavButton
        position="right"
        onClick={() => toggleSlide('right')}
      >{`>`}</NavButton>
    </ScrollContainer>
  );
};

SliderComponent.defaultProps = {
  data: [],
  sliderWidth: 0,
  translateX: 0,
  cardRef: {},
  margin: 0,
  show: 1,
  toggleSlide: () => {},
  currentIndex: 0,
  images: [],
};

SliderComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  show: PropTypes.number,
  margin: PropTypes.number,
  sliderWidth: PropTypes.number,
  translateX: PropTypes.number,
  cardRef: PropTypes.objectOf(
    PropTypes.shape({
      current: PropTypes.string,
    })
  ),
  toggleSlide: PropTypes.func,
  currentIndex: PropTypes.number,
  images: PropTypes.array,
};

export default SliderComponent;
