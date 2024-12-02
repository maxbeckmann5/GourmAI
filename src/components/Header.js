import React from 'react';
import { SearchIcon } from './Icons';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#home" className="logo-link">GourmAI</a>
      </div>
      <nav className="navbar">
        <a href="#features" className="nav-item">Features</a>
        <a href="#testimonials" className="nav-item">Testimonials</a>
        <a href="#faq" className="nav-item">FAQ</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
        />
        <button className="search-button">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
