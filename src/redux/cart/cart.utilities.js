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