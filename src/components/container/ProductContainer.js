import React from "react";
import { connect } from "react-redux";
import {
	fetchProduct,
	selectAttribute,
} from "../../features/product/productSlice";

class ProductContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProduct(this.props.productId));
	}
	componentDidUpdate(prevProps) {
		if (prevProps.productId !== this.props.productId) {
			this.props.dispatch(fetchProduct(this.props.productId));
		}
	}

	render() {
		const { value, selectedAttributes, status, error } = this.props.product;
		const dispatch = this.props.dispatch;

		return this.props.children({
			value,
			selectedAttributes,
			status,
			error,
			selectAttribute: (attributeItem) =>
				dispatch(selectAttribute(attributeItem)),
		});
	}
}

function mapStateToProps(state) {
	const { product } = state;
	return {
		product,
	};
}

export default connect(mapStateToProps)(ProductContainer);
