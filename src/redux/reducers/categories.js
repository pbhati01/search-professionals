import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const categories = (state = initialState.categories, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES: 
      return action.categories || [];
    default:
      return state;
  }
}

export default categories;
