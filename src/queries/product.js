import { gql } from "@apollo/client";

const PRODUCT = gql`
	query getProduct($productId: String!) {
		product(id: $productId) {
			id
			name
			gallery
			inStock
			description
			category
			brand
			attributes {
				id
				name
				type
				items {
					id
					value
					displayValue
				}
			}
			prices {
				amount
				currency {
					label
					symbol
				}
			}
		}
	}
`;

export default PRODUCT;
