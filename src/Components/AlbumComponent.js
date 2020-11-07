import React from 'react';
import PropTypes from 'prop-types';
import LoaderComponent from './LoaderComponent';
import PopUpComponent from './PopUpComponent';
import { BackButton, FullItem, FullImage, Wrapper } from '../Styled';
import { Link } from 'react-router-dom';

const AlbumComponent = ({isLoading, photos, togglePopup, currentIndex, hasError, userId, isOpen}) => (
  <Wrapper>
    {isLoading ? (
      <LoaderComponent />
    ) : (
      photos.map((item, index) => (
        <FullItem
          key={item.id}
          onClick={() => togglePopup(index)}
          id={item.id}
        >
          <FullImage src={item.url} alt={item.title} />
        </FullItem>
      ))
    )}
    {isOpen && (
      <PopUpComponent
        content={photos}
        currentIndex={currentIndex}
        handleClose={togglePopup}
      />
    )}
    {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
    <Link to={`/user?id=${userId}`} className="link">
      <BackButton>
        <span>Go Back</span>
      </BackButton>
    </Link>
  </Wrapper>
);

AlbumComponent.defaultProps = {
  photos: [],
  isLoading: false,
  hasError: false,
  togglePopup: () => {},
  isOpen: false,
  currentIndex: 0,
  userId: 1,
};


AlbumComponent.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      albumId: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  currentIndex: PropTypes.number,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  togglePopup: PropTypes.func,
  isOpen: PropTypes.bool,
  userId: PropTypes.string,
};

export default AlbumComponent;
