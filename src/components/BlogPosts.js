// src/components/BlogPosts.js
import React, { useEffect, useState } from 'react';
import './BlogPosts.css'; // Import CSS file for styling

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Intentionally breaking the URL to simulate an error
        const response = await fetch('https://jsonplaceholder.typiciode.com/poosts');
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
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-posts">
      <h1>Blog Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post, index) => (
          <li key={post.id} className="blog-post">
            <h2 className="post-title">
              <span className="post-number">{index + 1}. </span>
              {post.title}
            </h2>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
