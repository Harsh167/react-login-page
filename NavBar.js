import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">{username}</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="navbar-logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
