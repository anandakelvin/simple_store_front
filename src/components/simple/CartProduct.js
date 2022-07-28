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
		const { cartProduct, cartAdd, cartRemove, selectAttribute, updatePrices } =
			this.props;
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
								<ProductBrand>{brand}</ProductBrand>
								<ProductName>{name}</ProductName>
								<PriceDiv>
									<Price prices={prices} />
								</PriceDiv>
								<ProductAttributes>
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
										/>
									))}
								</ProductAttributes>
							</Left>
							<Right>
								<QuantityWrapper>
									<QuantityButton onClick={() => cartAdd(cartProduct)}>
										+
									</QuantityButton>
									<div>{quantity}</div>
									<QuantityButton onClick={() => cartRemove(cartProduct)}>
										-
									</QuantityButton>
								</QuantityWrapper>
								<CartProductImage gallery={gallery} />
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
`;

const ProductBrand = styled.div`
	font-size: 30px;
	font-weight: 600;
	line-height: 30px;
`;

const ProductName = styled.div`
	font-size: 28px;
	font-weight: 300;
`;

const ProductAttributes = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
`;
