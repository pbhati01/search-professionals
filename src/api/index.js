import axios from 'axios';

export const fetchCategories = () => {
    return axios.get('https://d1i9eedhsgvpdh.cloudfront.net/production-plentific-static/api-cache/find-a-pro/api/v1/categories/all.json');
}

export const fetchProfessionals = (request) => {
    return axios.post('https://demo.plentific.com/find-a-pro/api/v2/public/pro/search-pros/', request.data, {
        'headers': {
            'Content-Type': 'application/json',
            ...request.headers
        }
    });
}
