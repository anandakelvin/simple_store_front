import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default class Page extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<>
				<Navbar />
				<Div>{children}</Div>
			</>
		);
	}
}

const Div = styled.div`
	max-width: 1024px;
	background-color: white;
`;
