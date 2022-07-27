import React from "react";
import styled from "styled-components";
import ProductContainer from "../container/ProductContainer";
import PageContent from "../layout/Page";

export default class ProductRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { productId: id } = match.params;
		return (
			<ProductContainer productId={id}>
				{({ value, status }) => {
					if (status === "succeeded") {
						if (value === null) {
							return (
								<PageContent.Centered>
									Product is not found.
								</PageContent.Centered>
							);
						}
						return (
							<PageContent>
								<Title>{value.name.capitalize()}</Title>
							</PageContent>
						);
					}
					return <PageContent isLoading={true} />;
				}}
			</ProductContainer>
		);
	}
}

const Title = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`;
