import React from "react";
import styled from "styled-components";
import Currency from "../simple/Currency";

export default class Currencies extends React.Component {
	render() {
		const { currencies } = this.props;
		return (
			<Select>
				{currencies.map((el, index) => (
					<Currency key={index} currency={el} />
				))}
			</Select>
		);
	}
}

const Select = styled.select`
	appearance: none;
	width: 100px;
`;
