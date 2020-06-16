import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const prosData = (state = initialState.prosData, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFESSIONALS_DATA: 
      const { professionals, headers } = action.data;
      return { professionals, headers } || {};
    default:
      return state;
  }
}

export default prosData;
