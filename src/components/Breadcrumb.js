import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb Breadcrumb__itemsList">
          {items.map(({ item, url }) => (
            <li
              aria-current="page"
              className="breadcrumb-item active"
              key={item}
            >
              <Link to={url}>{item}</Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
