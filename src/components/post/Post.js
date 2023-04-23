import React from 'react';

const Post = ({post}) => (
    <div className='postWrap'>
        <div>Post ID - {post.id}</div>
        <div>Post title - {post.title}</div>
        <button className='postBtn'>Post body</button>
    </div>
);

export default Post;