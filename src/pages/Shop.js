import React, { Component } from 'react';
import PreviewCollection from '../components/PreviewCollection';
import SHOP_DATA from './shopdata';

export class Shop extends Component {
  state = {
    collection: SHOP_DATA,
  };

  render() {
    const { collection } = this.state;

    return (
      <div className="shop-page">
        {collection.map((collectionItem) => {
          return (
            <PreviewCollection key={collectionItem.id} {...collectionItem} />
          );
        })}
      </div>
    );
  }
}

export default Shop;
