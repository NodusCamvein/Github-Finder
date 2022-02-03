import githubContext from './gitHubContext';
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
    <githubContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
