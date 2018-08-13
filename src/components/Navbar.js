import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top Navbar">
    <div className="container">
      <h1 className="navbar-brand">Blog</h1>
      <Link to="/novo-post" className="btn btn-primary">
        Novo post
      </Link>
    </div>
  </nav>
);

export default Navbar;
