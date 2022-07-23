import { gql } from "@apollo/client";

const CATEGORIES = gql`
	query getCategories {
		categories {
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

export default CATEGORIES;
