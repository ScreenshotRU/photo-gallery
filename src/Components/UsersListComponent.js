import { Link } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import PropTypes from 'prop-types';
import logo from '../Assets/Img/album.png';
import React from 'react';
import {AlbumLogo, Item, Text, Wrapper} from '../Styled';

const UsersListComponent = (props) => {
  return (
    <Wrapper>
      {props.isLoading ? (
        <LoaderComponent />
      ) : (
        props.users.map((item) => (
          <Item key={item.id} >
            <AlbumLogo src={logo} alt="AlbumComponent ico" />
            <Text>Albums by</Text>
            <Link to={`/user?id=${item.id}`} className="link">
              {item.name}
            </Link>
          </Item>
        ))
      )}
      {props.hasError && (
        <span>Has error: {JSON.stringify(props.hasError)}</span>
      )}
    </Wrapper>
  );
};

UsersListComponent.defaultProps = {
  isLoading: true,
  users: [],
  hasError: true,
};

UsersListComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default UsersListComponent;
