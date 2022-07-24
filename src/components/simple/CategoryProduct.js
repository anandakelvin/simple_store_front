import React from "react";
import styled from "styled-components";

export default class CategoryProduct extends React.Component {
	render() {
		const { product } = this.props;
		const { gallery, name, brand, prices } = product;

		return (
			<Button>
				<Image src={gallery[0]} />
				<div>{`${brand} ${name}`}</div>
				<div>{`${prices[0].currency.label} ${prices[0].amount}`}</div>
			</Button>
		);
	}
}

const Button = styled.button`
	padding: 10px;
	align-items: baseline;
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	aspect-ratio: 1;
`;
