import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <>
      <div className='Post-Top'>
        <img src={props.post.thumbnailUrl} alt='thumbnail' />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt='postpic' />
      <h3>{props.post.timestamp}</h3>
      <CommentSection comments={props.post.comments} />
      <input type='text' placeholder='add a comment...' />
    </>
  );
};

export default Post;
