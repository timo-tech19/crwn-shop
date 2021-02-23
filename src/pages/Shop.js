import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../components/CollectionsOverview';
import Collection from './Collection';

function Shop({ match }) {
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route path={`${match.path}/:collection`} component={Collection} />
        </div>
    );
}

export default Shop;
