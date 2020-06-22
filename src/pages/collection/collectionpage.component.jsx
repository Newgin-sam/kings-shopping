import React from 'react';

import {connect} from 'react-redux';
import CollectionItem from "../../components/collection-item/collectionitem.component";
import './collectionpage.styles.scss';

import {selectCollection} from '../../redux/shop/shop.selector'

const CollectionPage = ({collection})=> {
    const {items,title} = collection
    return(
    <div className="collection-page">
        <div className="title">{title}</div>
        <div className="items" >
        {
            items.map(item => <CollectionItem key={item.id} item={item} />)
        }
        </div>
        
    </div>
)};

const mapStateToProps = (state , ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);