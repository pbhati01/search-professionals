import { combineReducers } from 'redux';
import categories from './categories';
import prosData from './prosData';

export default combineReducers({
    categories,
    prosData
});
