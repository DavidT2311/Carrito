import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";

const reducer = combineReducers({
  cart: cartSlice,
});

export default reducer;
