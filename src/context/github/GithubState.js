import GithubContext from './gitHubContext';
import githubReducer from './gitHubReducer';
import React, { useReducer } from 'react';

const GithubState = (props) => {
  const initialState = {
    loading: false,
    repos: [],
    user: {},
    users: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
