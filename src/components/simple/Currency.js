import React from "react";
import styled from "styled-components";

export default class Currency extends React.Component {
	render() {
		const { currency } = this.props;
		return <CurrencyLi>{currency.symbol}</CurrencyLi>;
	}
}

const CurrencyLi = styled.li`
	padding: 10px;
	list-style-type: none;
	text-align: center;
	background-color: #fff;

	:hover {
		background-color: #eeeeee;
	}
`;
