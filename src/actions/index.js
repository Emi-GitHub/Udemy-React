import axios from 'axios';

//DODATI
//import _ from 'lodash';
//_.memoize (lodash) koristimo da ne bi bilo puno zahtjeva, vec da se pozove smao jednom
/* export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
} */

export const fetchPosts = () => async dispatch => {
    const BASE_URL='http://jsonplaceholder.typicode.com';
    const FINAL_URL=BASE_URL + '/posts';
    const response = await axios.get(FINAL_URL);
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = id => async dispatch => {
    const BASE_URL='http://jsonplaceholder.typicode.com';
    const FINAL_URL=BASE_URL + '/users/'+ id;
    const response = await axios.get(FINAL_URL);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};

/*
//parameter is id of user that we want to fatch
export const fetchUser = (id) => dispatch => { _fetchUser(id, dispatch); }
const _fetchUser = _.memoize(  async (id, dispatch) => {
    const BASE_URL='http://jsonplaceholder.typicode.com';
    const FINAL_URL=BASE_URL + '/users/'+ id;
    const response = await axios.get(FINAL_URL);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
});*/