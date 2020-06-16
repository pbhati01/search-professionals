import * as types from './types';
import * as api from '../../api';

export const setCategories = categories => ({
  type: types.SET_CATEGORIES,
  categories
});

export const fetchCategories = () => {
  return (dispatch) => {
    api.fetchCategories()
      .then(({ status, data }) => {
        if (status === 200) {
          const categories = data.map(category => ({'id': category.id, 'name': category.name}));
          dispatch(setCategories(categories));
        }
      })
      .catch((error) => {
        console.log('catch fetchCategories error', error);
      });
  };
};

export const setProfessionals = (professionals, headers) => ({
  type: types.SET_PROFESSIONALS_DATA,
  data: {professionals, headers}
});

export const fetchProfessionals = (request) => {
  return (dispatch) => {
    api.fetchProfessionals(request)
      .then(({ status, headers, data }) => {
        if (status === 200) {
          let professionals = data.response.pros.map( professional => {
            const {id, name, review_rating, main_address: { postcode }} = professional;
            return {id, name, review_rating, postcode};
          });
          dispatch(setProfessionals(professionals, headers));
        }
      })
      .catch((error) => {
        console.log('catch fetchProfessionals error', error);
      });
  };
};
