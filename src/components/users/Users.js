import GithubContext from '../../context/github/gitHubContext';
import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: 'repeat(3, 1fr)',
};

export default Users;
