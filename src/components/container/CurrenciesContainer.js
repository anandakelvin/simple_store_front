import React from "react";
import { connect } from "react-redux";
import {
	fetchCurrencies,
	setSelectedCurrency,
} from "../../features/currencies/currenciesSlice";

class CurrenciesContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCurrencies());
	}

	render() {
		const { value, selectedCurrency, status, error } = this.props.currencies;
		const dispatch = this.props.dispatch;

		return (
			// <Currencies
			// 	onSelect={(currency) => dispatch(setSelectedCurrency(currency))}
			// 	selectedCurrency={selectedCurrency}
			// 	currencies={value}
			// />
			<>
				{this.props.children({
					value,
					selectedCurrency,
					status,
					error,
					setSelectedCurrency: (currency) =>
						dispatch(setSelectedCurrency(currency)),
				})}
			</>
		);
	}
}

function mapStateToProps(state) {
	const { currencies } = state;
	return {
		currencies,
	};
}

export default connect(mapStateToProps)(CurrenciesContainer);
