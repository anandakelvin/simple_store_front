import React from "react";
import styled from "styled-components";
import CategoryProduct from "../simple/CategoryProduct";

export default class CategoryProducts extends React.Component {
	render() {
		const { products } = this.props;
		return (
			<Div>
				{products.map((el, index) => (
					<CategoryProduct key={index} product={el} />
				))}
			</Div>
		);
	}
}

const Div = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 60px; ;
`;
