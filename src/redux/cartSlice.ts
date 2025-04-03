import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState ={
    items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            sessionStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            sessionStorage.setItem('cart', JSON.stringify(state.items));
        },
        updateQuantity: (state, action: PayloadAction<{id: number; quantity: number}>) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity = action.payload.quantity;
            }
            sessionStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            sessionStorage.removeItem('cart');
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;