import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the detailed view of the blog post.</p>
    </div>
  );
};

export default BlogPost;
