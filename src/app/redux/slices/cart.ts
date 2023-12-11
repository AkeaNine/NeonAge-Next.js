import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Cookies.remove("cart")

const initialState = Cookies.get("cart")
  ? // @ts-ignore
    { ...JSON.parse(Cookies.get("cart")), loading: true }
  : {
      cartItems: [],
      loading: true,
    };

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

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get("/api/user/getCartData");
  const data = await JSON.parse(response.data);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    adCartItem: (state, action) => {
      const product = action.payload.prodToAdd;
      const authenticated = action.payload.authenticated;

      const existingProdIndex = state.cartItems.findIndex(
        (item: any) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (existingProdIndex !== -1) {
        state.cartItems[existingProdIndex] = product;
      } else {
        state.cartItems.push(product);
      }

      if (authenticated) {
        updateDBCart(state.cartItems);
        setCookieCart(state);
      } else {
        setCookieCart(state);
      }
    },
    removeCartItem: (state, action) => {
      const product = action.payload.prodToRemove;
      const authenticated = action.payload.authenticated;
      const existingProdIndex = state.cartItems.findIndex(
        (item: any) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );
      state.cartItems.splice(existingProdIndex, 1);
      if (authenticated) {
        updateDBCart(state.cartItems);
        setCookieCart(state);
      } else {
        setCookieCart(state);
      }
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state: any, action: any) => {
      state.loading = false;
      // Add any fetched posts to the array
      state.cartItems = action.payload;
      Cookies.set("cart", JSON.stringify(state));
      // return state;
    });
    // .addCase(fetchCart.rejected, (state, action) => {
    //   state.status = ;
    //   state.error = action.error.message;
    // });
  },
});

export const { adCartItem, removeCartItem, hideLoading } = cartSlice.actions;
export default cartSlice.reducer;
