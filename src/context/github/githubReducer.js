import {
  CLEAR_USERS,
  GET_USER_AND_REPOS,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      throw Error(`Unhandled Action: ${action.type}`);
  }
};
export default reducer;
