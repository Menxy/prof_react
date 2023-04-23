import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = ({lift}) => {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result=>result.json())
            .then(result=>{
                setPosts([...result])
            })
    },[]);
    return (
        <div className='postsWrap'>
            {posts.map(post=>(
                <Post post={post} key={post.id} lift={lift}/>
            ))}
        </div>
    )
};

export default Posts;