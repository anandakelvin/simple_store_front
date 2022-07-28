import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../api/client";
import PRODUCT from "../../queries/product";

const initialState = {
	value: null,
	status: "idle",
	error: null,
	selectedAttributes: [],
};

export const productSlice = createSlice({
	initialState,
	name: "product",
	reducers: {
		selectAttribute(state, action) {
			const selectedAttribute = state.selectedAttributes.find(
				(el) => el.name === action.payload.name
			);
			selectedAttribute.selectedItem = action.payload.selectedItem;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProduct.pending, function (state, action) {
				state.status = "loading";
			})
			.addCase(fetchProduct.fulfilled, function (state, action) {
				state.status = "succeeded";
				state.error = null;
				state.value = action.payload.data.product;
				state.selectedAttributes =
					// state.value.id === action.payload.data.product.id
					// 	? state.selectedAttributes
					// 	:
					action.payload.data.product.attributes.map((el) => ({
						name: el.name,
						selectedItem: el.items[0].id,
					}));
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

export const { selectAttribute } = productSlice.actions;
export default productSlice.reducer;
