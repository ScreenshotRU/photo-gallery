import React, { useState, useEffect } from 'react';
import AlbumsListComponent from '../Components/AlbumsListComponent';

const AlbumsList = () => {
    const [hasError, setErrors] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id');
        const url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
        const fetchData = async () => {
            setIsLoading(true);
            const res = await fetch(url);
            res
                .json()
                .then((res) => {
                    setAlbums(res);
                    return res;
                })
                .then((res) => {
                    const albumIdsUrl = res.map(
                        (item) =>
                            `https://jsonplaceholder.typicode.com/albums/${item.id}/photos`
                    );
                    Promise.all(
                        albumIdsUrl.map((url) => fetch(url).then((res) => res.json()))
                    ).then((res) => {
                        setPhotos(res.flat(1));
                        setIsLoading(false);
                    });
                })
                .catch((err) => setErrors(err));
        };
        fetchData();
    }, []);

    return (
        <AlbumsListComponent
            hasError={hasError}
            albums={albums}
            photos={photos}
            isLoading={isLoading}
        />
    )
};

export default AlbumsList;