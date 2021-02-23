import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

function MenuItem({ title, imageUrl, size }) {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <Link to={`/shop/${title.toLowerCase()}`} className="content">
                <span className="title">{title}</span>
                <span className="subtitle">Shop now</span>
            </Link>
        </div>
    );
}

export default MenuItem;
