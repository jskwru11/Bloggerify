import { GET_POSTS, NEW_POST } from '../actions/posts';

const initialState = {
    items: [],
    item: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                items: action.payload 
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
};