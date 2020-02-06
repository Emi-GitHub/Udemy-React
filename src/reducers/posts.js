const initialState = [];

const posts = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_POSTS': return action.payload;
        default: return state;
    }
};

export default posts;