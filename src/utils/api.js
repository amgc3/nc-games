import axios from "axios"

const BASE_URL = 'https://annas-games-reviews.herokuapp.com/api';

export const fetchReviews = (category, sort_by) => {
    return axios
    .get(`${BASE_URL}/reviews`, {
        params: {
            category,
            sort_by
        }
    })
    .then((response) => response.data.reviews)
};

export const fetchReviewById = (id) => {
    return axios
    .get(`${BASE_URL}/reviews/${id}`)
    .then((response) => response.data.review);
};

export const fetchComments = (id) => {
    return axios.get(`${BASE_URL}/reviews/${id}/comments`)
    .then((response) => response.data.comments);
}

export const postComment = (id, newComment) => {
    return axios.post(`${BASE_URL}/reviews/${id}/comments`, newComment)
    .then((response) => response.data.comment)
}