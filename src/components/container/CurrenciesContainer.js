import React from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../../features/currencies/currenciesSlice";

class CurrenciesContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCurrencies());
	}
	render() {
		const { value: currencies } = this.props.currencies;
		const dispatch = this.props.dispatch;

		//TODO: Create Currencies UI Component
		return <></>;
	}
}

function mapStateToProps(state) {
	const { currencies } = state;

	return {
		currencies,
	};
}

export default connect(mapStateToProps)(CurrenciesContainer);
