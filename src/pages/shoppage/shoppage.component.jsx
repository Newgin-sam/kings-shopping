import React from 'react';
import SHOP_DATA from './shop-data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.collection';


class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collection : SHOP_DATA
        };
    }
    render() {
        
        return (
            <div className="shoppage">
                {this.state.collection.map(({id, ...otherShopProps}) => (
                    <CollectionPreview key={id} {...otherShopProps} />
                ))}
            </div>
        );
    }
}
export default ShopPage; 