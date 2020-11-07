import React, { useState, useEffect } from 'react';
import UsersListComponent from '../Components/UsersListComponent';

const UsersList = () => {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(url);
      res
        .json()
        .then((res) => {
          setUsers(res);
          setIsLoading(false);
          return res;
        })
        .catch((err) => setErrors(err));
    };
    fetchData();
  }, []);

  return (
    <UsersListComponent
      hasError={hasError}
      users={users}
      isLoading={isLoading}
    />
  );
};


export default UsersList;
