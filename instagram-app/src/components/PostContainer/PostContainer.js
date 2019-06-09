import React from 'react';
import Post from './Post';

const PostContainer = props => {
  return (
    <div>
      {props.data.map(post => {
        return (
          <>
            <Post post={post} />
          </>
        );
      })}
    </div>
  );
};

export default PostContainer;
