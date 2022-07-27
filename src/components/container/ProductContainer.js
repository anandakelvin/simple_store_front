import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../features/product/productSlice";

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
		const { value, status, error } = this.props.product;

		return this.props.children({
			value,
			status,
			error,
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
