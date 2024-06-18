// src/components/BlogPosts.js
import React, { useEffect, useState } from 'react';
import './BlogPosts.css';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError('Data Fetching Failed');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Data Fetching Failed</p>;

  return (
    <div className="blog-posts">
      <h1>Posts</h1>
      <ol>
        {posts.slice(0, 10).map((post, index) => (
          <li key={post.id} className="blog-post">
            <h2 className="post-title">
              <span className="post-number">{index + 1}. </span>
              {post.title}
            </h2>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BlogPosts;


