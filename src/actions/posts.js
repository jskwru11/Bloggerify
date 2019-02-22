export const GET_POSTS = 'GET_POSTS';
export const NEW_POST = 'NEW_POST';



export const getPosts = () => dispatch => {

    fetch(`http://localhost:3000/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    .then(res => res.json())
    // .then(posts => console.log(posts.posts))
    .then(posts => dispatch({type: GET_POSTS, payload: posts.posts}))
};

export const createPost = postData => dispatch => {
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }))
};