import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../api/client";
import CATEGORY from "../../queries/category";

const initialState = {
	value: null,
	status: "idle",
	error: null,
};

export const categorySlice = createSlice({
	initialState,
	name: "category",
	extraReducers(builder) {
		builder
			.addCase(fetchCategory.pending, function (state, action) {
				state.status = "loading";
			})
			.addCase(fetchCategory.fulfilled, function (state, action) {
				state.status = "succeeded";
				state.error = null;
				state.value = action.payload.data.category;
			})
			.addCase(fetchCategory.rejected, function (state, action) {
				state.status = "failed";
				state.error = action.payload.error;
			});
	},
});

export const fetchCategory = createAsyncThunk(
	"category/fetchCategory",
	async function (categoryName) {
		const response = await client.query({
			query: CATEGORY,
			variables: { input: { title: categoryName } },
		});
		return response;
	}
);

export default categorySlice.reducer;
