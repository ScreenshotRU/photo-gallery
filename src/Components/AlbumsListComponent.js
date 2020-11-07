import { Link } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { BackButton, Item, Text, Wrapper } from '../Styled';
import React from 'react';
import PropTypes from 'prop-types';

const AlbumsListComponent = ({albums, hasError, isLoading, photos}) => {
  return (
    <Wrapper>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        albums.map((item) => (
          <Item key={item.id}>
            <Link
              to={`/album?id=${item.id}&user=${item.userId}`}
              className="link album-title"
            >
              {item.title}
            </Link>
            <img
              src={
                photos.find((photo) => photo.albumId === item.id)
                  ?.thumbnailUrl
              }
              alt={item.title}
            />
            <Text>
              {photos.filter((photo) => photo.albumId === item.id).length}{' '}
              photos
            </Text>
          </Item>
        ))
      )}

      {hasError && (
        <span>Has error: {JSON.stringify(hasError)}</span>
      )}
      <Link to={`/`} className="link">
        <BackButton>
          <span>Go Back</span>
        </BackButton>
      </Link>
    </Wrapper>
  );
};
AlbumsListComponent.defaultProps = {
  hasError: false,
  albums: [],
  photos: [],
  isLoading: false,
};

AlbumsListComponent.propTypes = {
  hasError: PropTypes.bool,
  albums: PropTypes.array,
  photos: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default AlbumsListComponent;
