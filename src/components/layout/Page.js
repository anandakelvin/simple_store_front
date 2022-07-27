import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

export default class Page extends React.Component {
	render() {
		const { children, isLoading } = this.props;
		return <Content>{isLoading ? <BeatLoader /> : children}</Content>;
	}
}

const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1024px;
	padding: 20px;
	padding-top: 30px;
	padding-bottom: 30px;
	background-color: white;
`;
