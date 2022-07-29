import { gql } from "@apollo/client";

const CATEGORIES = gql`
	query getCategories {
		categories {
			__typename @skip(if: true)
			name
		}
	}
`;

export default CATEGORIES;
