import React from "react";
import { connect } from "react-redux";
import {
	reset,
	updatePrices,
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
			updatePrices: (updatePricesArg) =>
				dispatch(updatePrices(updatePricesArg)),
			cartAdd: (cartProduct) => dispatch(cartAdd(cartProduct)),
			cartRemove: (cartProduct) => dispatch(cartRemove(cartProduct)),
			selectAttribute: (cartProduct) => dispatch(selectAttribute(cartProduct)),
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
