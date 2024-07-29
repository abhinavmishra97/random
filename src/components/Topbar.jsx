import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'

const Topbar = () => {
  return (
    <div >
      <ul className="top-container">
        <li className="top-list">
          <Link to="/" className="topbar-link">
            Home
          </Link>
        </li>
        <li className="top-list">
          <Link to="/about" className="topbar-link">
            About
          </Link>
        </li>
        <li className="top-list">
          <Link to="/info" className="topbar-link">
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Topbar