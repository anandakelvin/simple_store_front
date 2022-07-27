import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../api/client";
import CATEGORIES from "../../queries/categories";

const initialState = {
	value: [],
	status: "idle",
	error: null,
};

export const categoriesSlice = createSlice({
	initialState,
	name: "categories",
	extraReducers(builder) {
		builder
			.addCase(fetchCategories.pending, function (state, action) {
				state.status = "loading";
			})
			.addCase(fetchCategories.fulfilled, function (state, action) {
				state.status = "succeeded";
				state.error = null;
				state.value = action.payload.data.categories;
			})
			.addCase(fetchCategories.rejected, function (state, action) {
				state.status = "failed";
				state.error = action.payload.error;
			});
	},
});

export const fetchCategories = createAsyncThunk(
	"categories/fetchCategories",
	async function () {
		const response = await client.query({ query: CATEGORIES });
		return response;
	}
);

export default categoriesSlice.reducer;
