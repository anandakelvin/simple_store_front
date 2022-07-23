import React from "react";
import styled from "styled-components";

export default class Currency extends React.Component {
	render() {
		const { currency, onClick } = this.props;
		return (
			<Li>
				<Button onClick={onClick}>{currency.symbol}</Button>
			</Li>
		);
	}
}

const Li = styled.li`
	list-style-type: none;
`;

const Button = styled.button`
	padding: 10px;
	text-align: center;
	background-color: #fff;

	:hover {
		background-color: #eeeeee;
	}
`;
