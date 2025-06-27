import React from 'react';
import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>🌟 My React Showcase</h1>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 My Website. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
function App() {
  const inlineStyle = {
    color: 'white',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    borderRadius: '8px',
    textAlign: 'center'
  };

  const username = 'Anjali';
  const isLoggedIn = true;
  const techStack = ['React', 'JavaScript', 'CSS', 'HTML'];

  return (
    <div className="app-container">
      <Header />

      <h2 style={inlineStyle}>
        {isLoggedIn ? `Welcome back, ${username}!` : 'Please Log In'}
      </h2>

      <p className="paragraph-style">
        Here's what we're learning in React:
      </p>

      <ul className="tech-list">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
