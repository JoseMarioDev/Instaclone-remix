import React from 'react';

const CommentSection = props => {
  console.log(props);
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <p>
            {comment.username}
            {comment.text}
          </p>
        );
      })}
    </div>
  );
};

export default CommentSection;
