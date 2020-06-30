import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state ={
    loading : true 
  }

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collection');

    collectionRef.get().then( snapshot =>{
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({loading:false});
    });
      
  }
  
  render(){
    const {match} =this.props;
    const {loading} = this.state;
    
    return  (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props =><CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }/>
        <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
      </div>
    );
  }

}

const mapDispachToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispachToProps)(ShopPage);
