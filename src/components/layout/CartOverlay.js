import React from "react";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
import MiniCart from "../composite/MiniCart";

export default class CartOverlay extends React.Component {
	static contextType = AppContext;

	render() {
		const { isShowed } = this.props;
		return (
			<Div isShowed={isShowed} onClick={this.context.toggleShowCartOverlay}>
				<Content>
					<MiniCart />
				</Content>
			</Div>
		);
	}
}

const Div = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 9;
	display: ${(props) => !props.isShowed && "none"};
`;

const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 1024px;
	padding-right: 20px;
	display: flex;
	flex-direction: row-reverse;
`;
