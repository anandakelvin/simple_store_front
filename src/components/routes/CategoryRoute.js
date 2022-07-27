import React from "react";
import styled from "styled-components";
import CategoryProducts from "../composite/CategoryProducts";
import CategoryContainer from "../container/CategoryContainer";
import Page from "../layout/Page";

export default class CategoryRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { categoryName: name } = match.params;
		return (
			<CategoryContainer categoryName={name}>
				{({ value, status }) => (
					<Page isLoading={status === "loading"}>
						{status === "succeeded" && (
							<>
								<Title>{value.name.capitalize()}</Title>
								<CategoryProducts products={value.products} />
							</>
						)}
					</Page>
				)}
			</CategoryContainer>
		);
	}
}

const Title = styled.div`
	font-size: 40px;
`;
