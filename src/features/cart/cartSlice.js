import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

const initialState = {
	value: [
		{
			product: "ps-5",
			quantity: 1,
			selectedAttributes: [
				{ name: "Color", selectedItem: "Green" },
				{ name: "Capacity", selectedItem: "512G" },
			],
			prices: [
				{
					amount: 844.02,
					currency: {
						symbol: "$",
					},
				},
				{
					amount: 606.67,
					currency: {
						symbol: "£",
					},
				},
				{
					amount: 1088.79,
					currency: {
						symbol: "A$",
					},
				},
				{
					amount: 91147.25,
					currency: {
						symbol: "¥",
					},
				},
				{
					amount: 63826.91,
					currency: {
						symbol: "₽",
					},
				},
			],
		},
		{
			product: "ps-5",
			quantity: 1,
			selectedAttributes: [
				{ name: "Color", selectedItem: "Green" },
				{ name: "Capacity", selectedItem: "512G" },
			],
			prices: [
				{
					amount: 844.02,
					currency: {
						symbol: "$",
					},
				},
				{
					amount: 606.67,
					currency: {
						symbol: "£",
					},
				},
				{
					amount: 1088.79,
					currency: {
						symbol: "A$",
					},
				},
				{
					amount: 91147.25,
					currency: {
						symbol: "¥",
					},
				},
				{
					amount: 63826.91,
					currency: {
						symbol: "₽",
					},
				},
			],
		},
	],
};

export const cartSlice = createSlice({
	initialState,
	name: "cart",
	reducers: {
		reset(state, action) {
			state.value = [];
		},
		updatePrices(state, action) {
			const product = state.value[action.payload.cartProductIndex];
			product.prices = action.payload.prices;
		},
		cartAddProduct(state, action) {
			const product = state.value.find(
				(el) =>
					isEqual(el.product, action.payload.product) &&
					isEqual(el.selectedAttributes, action.payload.selectedAttributes)
			);
			if (product) {
				product.quantity += 1;
				return;
			}
			state.value.push(action.payload);
		},
		cartAdd(state, action) {
			const product = state.value[action.payload.cartProductIndex];
			product.quantity += 1;
		},
		cartRemove(state, action) {
			const product = state.value[action.payload.cartProductIndex];
			if (product) {
				product.quantity -= 1;
				if (product.quantity <= 0) {
					const indexToRemove = state.value.findIndex((el) =>
						isEqual(el, product)
					);
					state.value = state.value.filter(
						(el, index) => index !== indexToRemove
					);
				}
			}
		},
		selectAttribute(state, action) {
			const product = state.value[action.payload.cartProductIndex];
			const selectedAttribute = product.selectedAttributes.find(
				(el) => el.name === action.payload.selectedAttribute.name
			);
			selectedAttribute.selectedItem =
				action.payload.selectedAttribute.selectedItem;
		},
	},
});

export const {
	cartAddProduct,
	cartAdd,
	cartRemove,
	selectAttribute,
	updatePrices,
	reset,
} = cartSlice.actions;
export default cartSlice.reducer;
