import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

class Category extends React.Component {
	render() {
		const { category, location } = this.props;
		const { name } = category;

		const isActive = location.pathname.split("/")[2] === name;
		return (
			<Link to={`/categories/${name}`}>
				<Li isActive={isActive}>{name.toUpperCase()}</Li>
			</Link>
		);
	}
}

export default Category = withRouter(Category);

const Li = styled.li`
	padding: 20px;
	border-top: 2px solid transparent;
	border-bottom: 2px solid transparent;
	font-weight: 400;
	text-align: center;
	list-style-type: none;

	border-bottom-color: ${(props) => props.isActive && "#00d172"};
	color: ${(props) => props.isActive && "#00d172"};

	:hover {
		border-bottom-color: #00d172;
		color: #00d172;
	}
`;
