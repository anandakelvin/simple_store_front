import { find } from "lodash";
import React from "react";
import { BeatLoader } from "react-spinners";
import CurrenciesContainer from "../container/CurrenciesContainer";

export default class Price extends React.Component {
	componentDidMount() {
		if (this.props.updatePrices) {
			this.props.updatePrices(this.props.prices);
		}
	}

	render() {
		const { prices } = this.props;
		return (
			<CurrenciesContainer>
				{({ selectedCurrency, status }) => {
					if (status === "succeeded") {
						const price = find(
							prices,
							(e) => e.currency.symbol === selectedCurrency.symbol
						);
						return `${price?.currency.symbol}${price?.amount}`;
					}
					return <BeatLoader />;
				}}
			</CurrenciesContainer>
		);
	}
}
