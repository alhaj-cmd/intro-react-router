import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post)
    const {title, id, body} = post;

    const navigate = useNavigate()

    const handlNavigation = () =>{
        navigate(`/post/${id}`)

    }

    return (
        <div>
           <h3>{title}</h3>
           <h3>{id}</h3>
           <h2><Link to={`/post/${id}`}>Show Details</Link></h2>
           <Link to={`/post/${id}`}><button>Show post Details</button></Link>
           <button onClick={handlNavigation} >Button Show</button>
        
        </div>
    );
};

export default Post;