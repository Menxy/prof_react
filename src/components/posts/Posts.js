import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import FullPost from "../fullPost/FullPost";


const Posts = () => {
    let [posts, setPosts] = useState([]);
    let [chosen, setChosen] = useState(null)
    const lift = (pack) => {
        setChosen({...pack})
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result=>result.json())
            .then(result=>{
                setPosts([...result])
            })
    },[]);

    return (
        <div  className='container'>
            <div className='postsWrap'>
                {posts.map(post => (
                    <Post post={post} key={post.id} lift={lift}/>
                ))}
            </div>
            {chosen && (
                <div className='postWrap'>
                    <FullPost chosen={chosen}/>
                </div>)}

        </div>

    )
};

export default Posts;