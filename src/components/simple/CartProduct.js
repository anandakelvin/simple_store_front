import { Query } from "@apollo/client/react/components";
import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import client from "../../api/client";
import PRODUCT from "../../queries/product";
import Price from "../simple/Price";
import CartProductImage from "./CartProductImage";
import ProductAttribute from "./ProductAttribute";

export default class CartProduct extends React.Component {
	render() {
		const {
			cartProduct,
			cartAdd,
			cartRemove,
			selectAttribute,
			updatePrices,
			miniVersion,
		} = this.props;
		const { product, selectedAttributes, quantity } = cartProduct;
		return (
			<Query
				query={PRODUCT}
				variables={{ productId: product }}
				client={client}
				onCompleted={(data) => updatePrices(data.product.prices)}
			>
				{({ loading, error, data }) => {
					if (loading) {
						return (
							<Centered>
								<BeatLoader />
							</Centered>
						);
					}
					if (error) {
						return <Centered>{error.message}</Centered>;
					}
					const { brand, name, prices, attributes, gallery } = data.product;
					return (
						<Div>
							<Left>
								<ProductBrand miniVersion={miniVersion}>{brand}</ProductBrand>
								<ProductName miniVersion={miniVersion}>{name}</ProductName>
								<PriceDiv miniVersion={miniVersion}>
									<Price prices={prices} />
								</PriceDiv>
								<ProductAttributes miniVersion={miniVersion}>
									{attributes.map((attribute) => (
										<ProductAttribute
											key={attribute.name}
											attribute={attribute}
											onSelect={selectAttribute}
											idOfSelected={
												selectedAttributes.find(
													(el) => el.name === attribute.name
												).selectedItem
											}
											miniVersion={miniVersion}
										/>
									))}
								</ProductAttributes>
							</Left>
							<Right>
								<QuantityWrapper>
									<QuantityButton onClick={() => cartAdd()}>+</QuantityButton>
									<div>{quantity}</div>
									<QuantityButton onClick={() => cartRemove()}>
										-
									</QuantityButton>
								</QuantityWrapper>
								<CartProductImage gallery={gallery} miniVersion={miniVersion} />
							</Right>
						</Div>
					);
				}}
			</Query>
		);
	}
}

const PriceDiv = styled.div`
	font-weight: bold;
	font-size: 18px;
`;

const Centered = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100px;
`;

const QuantityButton = styled.button`
	width: 30px;
	height: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
`;

const QuantityWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Right = styled.div`
	display: flex;
	gap: 20px;
`;

const Left = styled.div`
	flex-grow: 1;
`;

const Div = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
	margin-bottom: 20px;
	gap: 20px;
`;

const ProductBrand = styled.div`
	font-size: ${(props) => (!props.miniVersion ? "30px" : "20px")};
	font-weight: ${(props) => (!props.miniVersion ? "600" : "300")};
	line-height: 30px;
`;

const ProductName = styled.div`
	font-size: ${(props) => (!props.miniVersion ? "28px" : "18px")};
	font-weight: 300;
`;

const ProductAttributes = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => (!props.miniVersion ? "10px" : "7px")};
	margin-top: ${(props) => (!props.miniVersion ? "10px" : "7px")};
	margin-bottom: ${(props) => (!props.miniVersion ? "10px" : "7px")};
`;
