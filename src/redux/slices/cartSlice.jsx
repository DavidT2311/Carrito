import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProducts from "../../services/getProducts";

export const fetchProducts = createAsyncThunk(
  "getProducts",
  async () => await getProducts()
);

const initialState = {
  products: [],
  cartProducts: [],
  loading: "idle",
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id == action.payload
      );

      const existingProduct = state.cartProducts.find(
        (product) => product.id == action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        state.cartProducts.push(product);
      }
    },
    deleteProductFromCart: (state, action) => {
      const product = state.cartProducts.find(
        (product) => product.id == action.payload
      );

      if (!product) return;

      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        const index = state.products.indexOf(
          (product) => product.id == action.payload
        );
        state.cartProducts.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      state.cartProducts = initialState.cartProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export default cartSlice.reducer;
export const { addProductToCart, deleteProductFromCart, clearCart } =
  cartSlice.actions;

//---Carrito de compras---
//Agregar un producto o existencia
//Eliminar un productos o existencia
//Limpiar el carrito
