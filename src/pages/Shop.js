import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../components/CollectionsOverview';
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';
import { updateCollections } from '../redux/shop/shopActions';
import Collection from './Collection';

class Shop extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot(async (collection) => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(collection);
        //     updateCollections(collectionsMap);
        // });

        collectionRef.get().then(async (collection) => {
            const collectionsMap = convertCollectionsSnapshotToMap(collection);
            updateCollections(collectionsMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverview}
                />
                <Route
                    path={`${match.path}/:collection`}
                    component={Collection}
                />
            </div>
        );
    }
}
// function Shop({ match }) {}
const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
