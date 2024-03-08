import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import '../styles/header.css';

const Header = ({ score, highScore, message }) => {
  return (
    <nav>
      <div className="nav-group">
        <ul>
          <li><Link to="/">Clicky Game</Link></li>
        </ul>
      </div>
      <div className="nav-group">
        <div className="theCounter">
          <div>Score: {score}</div>
          <div>High Score: {highScore}</div>
          <div>{message}</div>
        </div>
      </div>
      <div className="nav-group">
        <ul>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
