import React from 'react';

function Comment({comment}) {
  return (
    <div className="post-comment">
      <img className="post-comment-avatar" src={comment.author.avatar} />
      <p className="post-comment-text">
        <strong>{comment.author.name} </strong>
        {comment.content}
      </p>
    </div>
  );
}

export default Comment;