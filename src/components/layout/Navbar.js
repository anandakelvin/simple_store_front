import React from "react";
import styled from "styled-components";
import Categories from "../composite/Categories";
import Logo from "../../assets/logo.svg";

export default class Navbar extends React.Component {
	render() {
		return (
			<Nav>
				<Categories
					categories={[{ name: "men" }, { name: "men" }, { name: "men" }]}
				/>
				<LogoWrapper>
					<img src={Logo} alt="Logo" />
				</LogoWrapper>
			</Nav>
		);
	}
}

const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Nav = styled.nav`
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
