import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Importing the CSS file

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <h1 className="navbar-logo">Movie Search App</h1>
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            className="navbar-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movie..."
          />
          <button type="submit" className="navbar-button">Search</button>
        </form>
        <div className="navbar-links">
          <a href="/" className="navbar-link">Popular</a>
          <a href="/top-rated" className="navbar-link">Top-Rated</a>
          <a href="/upcoming-Page" className="navbar-link">Upcoming</a>
        </div>
      </div>
    </nav>
    
  );
};


export default Navbar;
