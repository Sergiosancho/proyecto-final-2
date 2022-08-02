import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div className="toggle">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>

  );
};

export default Navbar;
