import React from "react";
import { connect } from "react-redux";
import {
	reset,
	updatePrices,
	cartAddProduct,
	cartAdd,
	cartRemove,
	selectAttribute,
} from "../../features/cart/cartSlice";

class CartContainer extends React.Component {
	render() {
		const { value } = this.props.cart;
		const dispatch = this.props.dispatch;

		return this.props.children({
			value,
			reset: () => dispatch(reset()),
			cartAddProduct: (arg) => dispatch(cartAddProduct(arg)),
			updatePrices: (arg) => dispatch(updatePrices(arg)),
			cartAdd: (arg) => dispatch(cartAdd(arg)),
			cartRemove: (arg) => dispatch(cartRemove(arg)),
			selectAttribute: (arg) => dispatch(selectAttribute(arg)),
		});
	}
}

function mapStateToProps(state) {
	const { cart } = state;
	return {
		cart,
	};
}

export default connect(mapStateToProps)(CartContainer);
