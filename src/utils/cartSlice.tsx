import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as {foodItems: string}[]
    },
    reducers: {

        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

// now we will export two things from here our actions and our reducers
export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer