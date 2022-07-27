import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../api/client";
import PRODUCT from "../../queries/product";

const initialState = {
	value: null,
	status: "idle",
	error: null,
};

export const productSlice = createSlice({
	initialState,
	name: "product",
	extraReducers(builder) {
		builder
			.addCase(fetchProduct.pending, function (state, action) {
				state.status = "loading";
			})
			.addCase(fetchProduct.fulfilled, function (state, action) {
				state.status = "succeeded";
				state.error = null;
				state.value = action.payload.data.product;
			})
			.addCase(fetchProduct.rejected, function (state, action) {
				state.status = "failed";
				state.error = action.payload.error;
			});
	},
});

export const fetchProduct = createAsyncThunk(
	"product/fetchProduct",
	async function (productId) {
		const response = await client.query({
			query: PRODUCT,
			variables: { productId: productId },
		});
		return response;
	}
);

export default productSlice.reducer;
