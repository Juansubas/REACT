import CartItem from "../components/CartItem";

export interface CartItem {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
    quantity : number;
}


export interface CartsResponse {
    products: CartItem[];
}

export type CartActions = 
    | { type: 'ADD_TO_CART' ; payload: CartItem}
    | { type: 'DECREASE_QUANTITY' ; payload: CartItem}
    | { type: 'REMOVE_FROM_CART' ; payload: CartItem}
    | { type: 'CLEAR_CART'};

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    decreaseQuantityFromCart: (product: CartItem) => void;
    removeFromCart: (product: CartItem) => void;
    clearCart: () => void;
}