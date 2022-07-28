import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import CategoriesContainer from "../container/CategoriesContainer";
import Category from "../simple/Category";

export default class Categories extends React.Component {
	render() {
		return (
			<Ul>
				<CategoriesContainer>
					{({ value, status }) => {
						if (status === "succeeded") {
							return (
								<>
									{value.map((el, index) => (
										<Category key={index} category={el} />
									))}
								</>
							);
						}
						return <BeatLoader />;
					}}
				</CategoriesContainer>
			</Ul>
		);
	}
}

const Ul = styled.ul`
	display: flex;
	gap: 5px;
	align-items: center;
`;
