import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categories/categoriesSlice";
import categorySlice from "../features/category/categorySlice";
import currenciesReducer from "../features/currencies/currenciesSlice";
import productSlice from "../features/product/productSlice";

export default configureStore({
	reducer: combineReducers({
		currencies: currenciesReducer,
		categories: categoriesSlice,
		category: categorySlice,
		product: productSlice,
	}),
});
