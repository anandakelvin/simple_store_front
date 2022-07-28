import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

export default class PageContent extends React.Component {
	static Centered({ children }) {
		return <Centered>{children}</Centered>;
	}

	render() {
		const { children, isLoading } = this.props;
		return <Content>{isLoading ? <BeatLoader /> : children}</Content>;
	}
}

const Centered = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 70vh;
`;

const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1024px;
	padding: 20px;
	padding-top: 30px;
	padding-bottom: 60px;
	background-color: white;
`;
