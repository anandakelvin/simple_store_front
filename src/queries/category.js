import { gql } from "@apollo/client";

const CATEGORY = gql`
	query getCategory($input: CategoryInput) {
		category(input: $input) {
			__typename @skip(if: true)
			name
			products {
				__typename @skip(if: true)
				id
				name
				gallery
				inStock
				brand
				attributes {
					__typename @skip(if: true)
					name
					type
					items {
						__typename @skip(if: true)
						id
						displayValue
						value
					}
				}
				prices {
					__typename @skip(if: true)
					amount
					currency {
						__typename @skip(if: true)
						label
						symbol
					}
				}
			}
		}
	}
`;

export default CATEGORY;
