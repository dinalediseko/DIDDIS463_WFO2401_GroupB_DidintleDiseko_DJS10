// src/App.js
import React from 'react';
import BlogPosts from './components/BlogPosts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Peer</h1>
      </header>
      <main>
        <BlogPosts />
      </main>
      <footer>
        <p>© 2024 D'Seikou. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


