// src/App.js
import React from 'react';
import BlogPosts from './components/BlogPosts';
import './App.css'; // Import global CSS if needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Blog</h1>
      </header>
      <main>
        <BlogPosts />
      </main>
      <footer>
        <p>© 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


