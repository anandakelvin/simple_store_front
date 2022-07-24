import React from "react";
import styled from "styled-components";
import CategoryProducts from "../composite/CategoryProducts";
import Page from "../layout/Page";

export default class CategoryRoute extends React.Component {
	render() {
		const { category } = this.props;
		const { name, products } = category;
		return (
			<Page>
				<Title>{name.capitalize()}</Title>
				<CategoryProducts products={products} />
			</Page>
		);
	}
}

const Title = styled.div`
	padding-top: 30px;
	padding-bottom: 30px;
	font-size: 40px;
`;
