import React from 'react';

const FullPost = ({chosen}) => (
    <div className='fullPost'>
        <div>Post ID - {chosen.id}</div>
        <div>Post title - {chosen.title}</div>
        <div>Post body - {chosen.body}</div>
    </div>
);

export default FullPost;