import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../api/client";
import CURRENCIES from "../../queries/currencies";

const initialState = {
	value: [],
	status: "idle",
	error: null,
	selectedCurrency: null,
};

export const currenciesSlice = createSlice({
	initialState,
	name: "currencies",
	reducers: {
		setSelectedCurrency(state, action) {
			state.selectedCurrency = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCurrencies.pending, function (state, action) {
				state.status = "loading";
			})
			.addCase(fetchCurrencies.fulfilled, function (state, action) {
				state.status = "succeeded";
				state.error = null;
				state.value = action.payload.data.currencies;
				state.selectedCurrency =
					state.selectedCurrency || action.payload.data.currencies[0];
			})
			.addCase(fetchCurrencies.rejected, function (state, action) {
				state.status = "failed";
				state.error = action.payload.error;
			});
	},
});

export const fetchCurrencies = createAsyncThunk(
	"currencies/fetchCurrencies",
	async function () {
		const response = await client.query({ query: CURRENCIES });
		return response;
	}
);

export const { setSelectedCurrency } = currenciesSlice.actions;
export default currenciesSlice.reducer;
