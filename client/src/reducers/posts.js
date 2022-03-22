import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            
        case CREATE:
            return [ ...posts, action.payload];
            
        case UPDATE:
            //If the post id in arr is equal to action.payload._id (the updated post's id), if not return the old post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case DELETE:
            return posts.filter((post) => post._id !== action.payload);

        // case 'LIKE':
        //     return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
}