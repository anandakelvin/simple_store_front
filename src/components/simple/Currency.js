import React from "react";
import styled from "styled-components";

export default class Currency extends React.Component {
	render() {
		const { currency, onClick } = this.props;
		return (
			<A onClick={() => onClick(currency)}>
				<div>{currency.symbol}</div>
				<div>{currency.label}</div>
			</A>
		);
	}
}

const A = styled.a`
	padding: 10px;
	padding-left: 20px;
	padding-right: 20px;
	text-align: left;
	background-color: #fff;
	display: flex;
	gap: 10px;
	justify-content: space-between;
	white-space: nowrap;
	width: 100%;

	:hover {
		background-color: #eeeeee;
	}
`;
