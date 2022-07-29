import React from "react";
import { BiCartAlt } from "react-icons/bi";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
import CartContainer from "../container/CartContainer";

export default class NavbarCart extends React.Component {
	static contextType = AppContext;

	render() {
		return (
			<RelativeButton onClick={this.context.toggleShowCartOverlay}>
				<BiCartAlt size={20} />
				<CartContainer>
					{({ value }) => {
						if (value.length > 0) {
							const quantities = value.reduce(
								(acc, el) => acc + el.quantity,
								0
							);
							return <CartIndicator>{quantities}</CartIndicator>;
						}
					}}
				</CartContainer>
			</RelativeButton>
		);
	}
}

const CartIndicator = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	border-radius: 50px;
	bottom: 13px;
	left: 13px;
	font-size: xx-small;
	background-color: black;
	color: white;
	padding: 3px;
	height: 15px;
	min-width: 15px;
	font-weight: bold;
`;

const RelativeButton = styled.button`
	position: relative;
	display: inline-block;
	text-align: left;
	z-index: 10;
`;
