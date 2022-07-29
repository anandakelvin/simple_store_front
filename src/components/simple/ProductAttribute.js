import React from "react";
import styled from "styled-components";

export default class ProductAttribute extends React.Component {
	render() {
		const { attribute, idOfSelected, onSelect, miniVersion } = this.props;
		const { name, type, items } = attribute;
		return (
			<Div>
				<Label miniVersion={miniVersion}>{name}:</Label>
				<ItemsWrapper>
					{items.map((el) => {
						if (type === "swatch") {
							return (
								<SwatchItemWrapper
									key={el.id}
									isSelected={el.id === idOfSelected}
									onClick={() => onSelect({ name, selectedItem: el.id })}
								>
									<SwatchItem value={el.value} />
								</SwatchItemWrapper>
							);
						}
						return (
							<Item
								key={el.id}
								isSelected={el.id === idOfSelected}
								onClick={() => onSelect({ name, selectedItem: el.id })}
							>
								{el.displayValue}
							</Item>
						);
					})}
				</ItemsWrapper>
			</Div>
		);
	}
}

const SwatchItemWrapper = styled.button`
	border: 1px solid transparent;
	border-color: ${(props) => props.isSelected && "#00d172"};
`;

const SwatchItem = styled.div`
	height: 25px;
	aspect-ratio: 1;
	border: 1px solid transparent;
	margin: 1px;
	background-color: ${(props) => props.value};
`;

const Item = styled.button`
	padding: 8px;
	padding-top: 5px;
	padding-bottom: 5px;
	border: 1px solid black;
	font-size: 12px;

	color: ${(props) => props.isSelected && "white"};
	background-color: ${(props) => props.isSelected && "black"};
`;

const ItemsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 5px;
`;

const Label = styled.div`
	font-weight: ${(props) => !props.miniVersion && "bold"};
	text-transform: uppercase;
	margin-bottom: 5px;
	font-size: ${(props) => (!props.miniVersion ? "14px" : "12px")};
`;

const Div = styled.div``;
