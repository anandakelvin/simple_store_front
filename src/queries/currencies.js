import { gql } from "@apollo/client";

const CURRENCIES = gql`
	query CurrencyQuery {
		currencies {
			label
			symbol
		}
	}
`;

export default CURRENCIES;
