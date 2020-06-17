export const addItemsToCart = (cartItems , ItemToAdd) => {
    const exisitngItem = cartItems.find( 
        cartItem => cartItem.id === ItemToAdd.id
    );

    if(exisitngItem){
        return cartItems.map(cartItem => 
            cartItem.id === ItemToAdd.id 
            ? 
            {...cartItem ,quantity : cartItem.quantity + 1} 
            : 
            cartItem
        );
    }

    return [...cartItems,{...ItemToAdd ,quantity : 1 }];
}
export const removeItemFromCart = (cartItems, ItemToRemove) => {
    const exisitngItem = cartItems.find( 
        cartItem => cartItem.id === ItemToRemove.id
    );

    if(exisitngItem.quantity === 1){
        return cartItems.filter( cartItem => cartItem.id !== ItemToRemove.id );
    }
    
    return cartItems.map(
            cartItem => cartItem.id === ItemToRemove.id 
                ? 
                {...cartItem,quantity : cartItem.quantity - 1 }
                : 
                cartItem 
        );

}