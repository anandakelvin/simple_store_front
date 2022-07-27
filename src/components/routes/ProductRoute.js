import React from "react";
import styled from "styled-components";
import ProductContainer from "../container/ProductContainer";
import Page from "../layout/Page";

export default class CategoryRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { productId: id } = match.params;
		return (
			<ProductContainer productId={id}>
				{({ value, status }) => (
					<Page isLoading={status === "loading"}>
						{status === "succeeded" && (
							<>
								<Title>{value.name.capitalize()}</Title>
							</>
						)}
					</Page>
				)}
			</ProductContainer>
		);
	}
}

const Title = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`;
