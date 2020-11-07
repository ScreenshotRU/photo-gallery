import React, { useState, useEffect } from 'react';
import AlbumComponent from '../Components/AlbumComponent';

const Album = () => {
  const [hasError, setErrors] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('user');

  const togglePopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const albumId = urlParams.get('id');
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(url);
      res
        .json()
        .then((res) => {
          setPhotos(res);
          setIsLoading(false);
          return res;
        })
        .catch((err) => setErrors(err));
    };
    fetchData();
  }, []);

  return (
    <AlbumComponent
      isLoading={isLoading}
      currentIndex={currentIndex}
      photos={photos}
      hasError={hasError}
      togglePopup={togglePopup}
      isOpen={isOpen}
      userId={userId}
    />
  );
};

export default Album;
