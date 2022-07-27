import { gql } from "@apollo/client";

const CATEGORY = gql`
	query getCategory($input: CategoryInput) {
		category(input: $input) {
			name
			products {
				id
				name
				gallery
				inStock
				brand
				prices {
					amount
					currency {
						label
						symbol
					}
				}
			}
		}
	}
`;

export default CATEGORY;
