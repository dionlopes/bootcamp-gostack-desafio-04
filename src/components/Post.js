import React from 'react';

import Comment from './Comment';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar"src={post.author.avatar} />
        <div className="post-info">
          <span className="post-author-name">{post.author.name}</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
      <p className="post-content">{post.content}</p>

      {post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default Post;