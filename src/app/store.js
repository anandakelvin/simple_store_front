import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "../features/currencies/currenciesSlice";

export default configureStore({
	reducer: {
		currencies: currenciesReducer,
	},
});
