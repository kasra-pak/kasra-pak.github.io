import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  return <main>post ID: {postId}</main>;
};

export default Post;
