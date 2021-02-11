import React from 'react';
import './MenuItem.scss';

function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
}

export default MenuItem;
