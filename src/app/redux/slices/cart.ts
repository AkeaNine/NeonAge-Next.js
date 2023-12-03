import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// @ts-ignore
const initialState = Cookies.get("cart") ? {cartItems: JSON.parse(Cookies.get("cart")), loading: true} : {
  cartItems: [],
  loading: true
};

console.log(initialState);

function setCookieCart(items: any) {
  Cookies.set("cart", JSON.stringify(items));
}

async function updateDBCart(cart: any) {
  try {
    await axios.post("/api/user/updateCart", cart);
  } catch (error: any) {
    const errorMessage = "Cart was not updated. PLease refresh and try again";

    throw new Error(errorMessage);
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    adCartItem: (state, action) => {
      const product = action.payload.prodToAdd;
      const authenticated = action.payload.authenticated;
      const initCart = state.cartItems;
      console.log(initCart);

      const existingProdIndex = state.cartItems.findIndex(
        (item: any) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (existingProdIndex !== -1) {
        // If the product already exists, update it
        state.cartItems[existingProdIndex] = product;
      } else {
        // If the product is not in the cart, add it
        state.cartItems.push(product);
      }

      if (authenticated) {
        updateDBCart(state.cartItems);
        setCookieCart(state);
      } else {
        setCookieCart(state);
      }
    },
    removeCartItem: (state, action) => {},
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { adCartItem, removeCartItem, hideLoading } = cartSlice.actions;
export default cartSlice.reducer;
