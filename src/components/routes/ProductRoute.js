import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import ProductContainer from "../container/ProductContainer";
import Page from "../layout/Page";

export default class ProductRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { productId: id, categoryName } = match.params;
		return (
			<ProductContainer productId={id}>
				{({ value, status }) => {
					if (status === "succeeded") {
						if (value === null) {
							return <Redirect to={`/categories/${categoryName}`} />;
						}
						return (
							<Page isLoading={status === "loading"}>
								<Title>{value.name.capitalize()}</Title>
							</Page>
						);
					}
					return <Page isLoading={true} />;
				}}
			</ProductContainer>
		);
	}
}

const Title = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`;
