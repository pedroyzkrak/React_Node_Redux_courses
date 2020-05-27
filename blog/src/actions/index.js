import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });

};

export const fetchUser = (id) => async dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = /*_.memoize*/(async (id,dispatch) => { //memoize makes request only once!! but we chose another path
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
});

export const fetchPostsandUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts());


    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
        /*
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id))) */
};