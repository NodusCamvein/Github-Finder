import GithubContext from '../../context/github/githubContext';
import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
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
