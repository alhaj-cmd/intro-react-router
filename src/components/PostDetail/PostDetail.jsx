import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    // console.log(post)
    const {id, title, body} = post;
    const handleDetails = useNavigate()
    const handle = () =>{
        handleDetails(-1)
    }

    return (
        <div>
            <h3>Post Details {id}</h3>
            <h1>{title}</h1>
            <p><small>{body}</small></p>
            <button onClick={handle}>Go Back</button>
        </div>
    );
};

export default PostDetail;