import axios from "axios"

const BASE_URL = 'https://annas-games-reviews.herokuapp.com/api';

// just created for possible future refactoring not used yet
export const fetchReviews = (category) => {
    let url =''
    if (category) {
        url = `${BASE_URL}/reviews?category=${category}`;
    } else {
        url = `${BASE_URL}/reviews`;
    }
    return axios
    .get(url)
    .then((response) => response.data.reviews)
};

export const fetchReviewById = (id) => {
    return axios
    .get(`${BASE_URL}/reviews/${id}`)
    .then((response) => response.data.reviews);
};