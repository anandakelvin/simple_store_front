import React from "react";
import styled from "styled-components";

export default class Category extends React.Component {
	render() {
		const { category } = this.props;
		const { name } = category;
		return <Li>{name.toUpperCase()}</Li>;
	}
}

const Li = styled.li`
	cursor: pointer;
	padding: 20px;
	border: 3px solid white;
	font-weight: 400;
	text-align: center;
	list-style-type: none;

	:hover {
		border-bottom-color: #00d172;
		color: #00d172;
	}
`;
