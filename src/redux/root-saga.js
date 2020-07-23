import { all,call } from 'redux-saga/effects';

import onFetchCollectionsStart from './shop/shop.sagas';
import userSaga from './user/user.sagas';
import cartSaga from './cart/cart.sagas';
import shopsaga from './shop/shop.sagas';

export default function* rootSaga(){
    yield all([call(onFetchCollectionsStart), call(userSaga), call(cartSaga), call(shopsaga)]);
}