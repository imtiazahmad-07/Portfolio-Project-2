import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // stores the products in the cart
  isToast: false,
  value: 0, // number of items in the cart
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);

      if (isExist) {
        state.isToast = true;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.value = state.items.reduce((total, item) => total + item.quantity, 0); // Update total item count
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
      
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
      
    },
    setCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, setCount } = productSlice.actions;
export default productSlice.reducer;
