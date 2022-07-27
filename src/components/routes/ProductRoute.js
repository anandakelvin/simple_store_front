import React from "react";
import styled from "styled-components";
import ProductContainer from "../container/ProductContainer";
import Page from "../layout/Page";

export default class ProductRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { productId: id } = match.params;
		return (
			<ProductContainer productId={id}>
				{({ value, status }) => {
					if (status === "succeeded") {
						if (value === null) {
							return <Page.Centered>Product is not found.</Page.Centered>;
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
