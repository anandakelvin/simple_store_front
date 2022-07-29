import { gql } from "@apollo/client";

const PRODUCT = gql`
	query getProduct($productId: String!) {
		product(id: $productId) {
			__typename @skip(if: true)
			id
			name
			gallery
			inStock
			description
			category
			brand
			attributes {
				__typename @skip(if: true)
				id
				name
				type
				items {
					__typename @skip(if: true)
					id
					value
					displayValue
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
`;

export default PRODUCT;
