import React from 'react';

const Post = ({post,lift}) => (
    <div className='postWrap'>
        <div>Post ID - {post.id}</div>
        <div>Post title - {post.title}</div>
        <button onClick={()=>{lift(post)}} className='postBtn'>Post body</button>
    </div>
);

export default Post;