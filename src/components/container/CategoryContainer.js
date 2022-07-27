import React from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../features/category/categorySlice";

class CategoryContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCategory(this.props.categoryName));
	}
	componentDidUpdate(prevProps) {
		if (prevProps.categoryName !== this.props.categoryName) {
			this.props.dispatch(fetchCategory(this.props.categoryName));
		}
	}

	render() {
		const { value, status, error } = this.props.category;

		return this.props.children({
			value,
			status,
			error,
		});
	}
}

function mapStateToProps(state) {
	const { category } = state;
	return {
		category,
	};
}

export default connect(mapStateToProps)(CategoryContainer);
