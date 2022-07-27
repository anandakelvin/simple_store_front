import React from "react";
import styled from "styled-components";
import Categories from "../composite/Categories";
import Logo from "../../assets/logo.svg";
import Currencies from "../composite/Currencies";

export default class Navbar extends React.Component {
	render() {
		return (
			<Nav>
				<Categories />
				<LogoWrapper>
					<img src={Logo} alt="Logo" />
				</LogoWrapper>
				<RightSideWrapper>
					<Currencies />
				</RightSideWrapper>
			</Nav>
		);
	}
}

const RightSideWrapper = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
`;

const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Nav = styled.nav`
	height: 68px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 20px;
	padding-right: 20px;
	max-width: 1024px;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	align-items: center;
	background-color: white;
`;
