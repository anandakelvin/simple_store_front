import React from "react";
import { BiCartAlt } from "react-icons/bi";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";

export default class NavbarCart extends React.Component {
	static contextType = AppContext;

	render() {
		return (
			<RelativeButton onClick={this.context.toggleShowCartOverlay}>
				<BiCartAlt />
			</RelativeButton>
		);
	}
}

const RelativeButton = styled.button`
	position: relative;
	display: inline-block;
	text-align: left;
	z-index: 10;
`;
