import React from 'react';
import Slider from '../Containers/Slider';
import PropTypes from 'prop-types';
import {IconClose, PopUpWrapper} from '../Styled';

const PopUpComponent = ({content, currentIndex, handleClose}) => {

  return (
    <PopUpWrapper>
      <div>
        <Slider
          images={content.map((item) => item)}
          show={1}
          margin={15}
          currentIndex={currentIndex}
        />
        <IconClose onClick={handleClose}>
          x
        </IconClose>
      </div>
    </PopUpWrapper>
  );
};

PopUpComponent.defaultProps = {
  content: [],
  show: null,
  margin: null,
  currentIndex: null,
  handleClose: () => {},
};

PopUpComponent.propTypes = {
  content: PropTypes.array,
  show: PropTypes.number,
  margin: PropTypes.number,
  currentIndex: PropTypes.number,
  handleClose: PropTypes.func,
};

export default PopUpComponent;
