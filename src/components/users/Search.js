import { CLEAR_USERS, SEARCH_USERS, SET_LOADING } from '../../context/types';
import { searchUsers } from '../../context/github/actions';
import AlertContext from '../../context/alert/alertContext';
import githubContext from '../../context/github/gitHubContext';
import React, { useState, useContext } from 'react';

const Search = () => {
  const { dispatch, users } = useContext(githubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      dispatch({ type: SET_LOADING });
      searchUsers(text).then((users) => {
        dispatch({ type: SEARCH_USERS, payload: users });
        setText('');
      });
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          name='text'
          onChange={onChange}
          placeholder='Search Users...'
          type='text'
          value={text}
        />
        <input
          className='btn btn-dark btn-block'
          type='submit'
          value='Search'
        />
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={() => dispatch({ type: CLEAR_USERS })}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
