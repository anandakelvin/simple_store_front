import React from "react";
import styled from "styled-components";
import Category from "../simple/Category";

export default class Categories extends React.Component {
	render() {
		const { categories } = this.props;
		return (
			<Ul>
				{categories.map((el, index) => (
					<Category key={index} category={el} />
				))}
			</Ul>
		);
	}
}

const Ul = styled.ul`
	display: flex;
	gap: 5px;
`;
