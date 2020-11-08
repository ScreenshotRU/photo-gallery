import React from 'react';
import {BackButton} from '../Styled';
import {Link} from 'react-router-dom';

const BackButtonComponent = ({backButtonUrl}) => {
    return(
  <Link to={backButtonUrl} className="link">
    <BackButton>
      <span>Go Back</span>
    </BackButton>
  </Link>
    )
};
export default BackButtonComponent;
