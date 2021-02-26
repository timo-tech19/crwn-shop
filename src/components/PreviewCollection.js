import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import './PreviewCollection.scss';

function PreviewCollection({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">
                <Link to={`/shop/${title.toLowerCase()}`}>{title}</Link>
            </h1>
            <div className="preview">
                {items
                    .filter((item, i) => i < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default PreviewCollection;
