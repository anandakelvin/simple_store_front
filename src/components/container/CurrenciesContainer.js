import React from "react";
import { connect } from "react-redux";
import {
	fetchCurrencies,
	setSelectedCurrency,
} from "../../features/currencies/currenciesSlice";
import Currencies from "../composite/Currencies";

class CurrenciesContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCurrencies());
	}

	render() {
		const { value: currencies, selectedCurrency } = this.props.currencies;
		const dispatch = this.props.dispatch;

		return (
			<Currencies
				onSelect={(currency) => dispatch(setSelectedCurrency(currency))}
				selectedCurrency={selectedCurrency}
				currencies={currencies}
			/>
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
