import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shopSelectors';
import PreviewCollection from './PreviewCollection';
import './CollectionsOverview.scss';

function CollectionsOverview({ collections }) {
    return (
        <div className="collections-overview">
            {collections.map((collectionItem) => {
                return (
                    <PreviewCollection
                        key={collectionItem.id}
                        {...collectionItem}
                    />
                );
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
