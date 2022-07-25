import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default class Page extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<>
				<header>
					<Navbar />
				</header>
				<Content>{children}</Content>
			</>
		);
	}
}

const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1024px;
	padding: 20px;
	padding-top: 0px;
	background-color: white;
`;
