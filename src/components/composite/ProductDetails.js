import React from "react";
import styled from "styled-components";
import ProductAttribute from "../simple/ProductAttribute";
import CurrenciesContainer from "../container/CurrenciesContainer";
import { find } from "lodash";
import { BeatLoader } from "react-spinners";
import parse from "html-react-parser";

export default class ProductDetails extends React.Component {
	render() {
		const { name, inStock, description, gallery, attributes, brand, prices } =
			this.props.product;
		return (
			<Div>
				<Images>
					{gallery.map((el) => (
						<Image key={el} src={el} />
					))}
				</Images>
				<LargeImageWrapper>
					<LargeImage src={gallery[0]} />
				</LargeImageWrapper>
				<Info>
					<ProductBrand>{brand}</ProductBrand>
					<ProductName>{name}</ProductName>
					<ProductAttributes>
						{attributes.map((el) => (
							<ProductAttribute key={el.name} attribute={el} />
						))}
					</ProductAttributes>
					<Label>Price</Label>
					<CurrenciesContainer>
						{({ selectedCurrency, status }) => {
							if (status === "succeeded") {
								const price = find(
									prices,
									(e) => e.currency.symbol === selectedCurrency.symbol
								);
								return (
									<Price>{`${price?.currency.symbol}${price?.amount}`}</Price>
								);
							}
							return <BeatLoader />;
						}}
					</CurrenciesContainer>
					<CallToActionButton disabled={!inStock}>
						ADD TO CART
					</CallToActionButton>
					<Description>{parse(description)}</Description>
				</Info>
			</Div>
		);
	}
}

const Description = styled.div`
	font-size: 14px;
`;

const CallToActionButton = styled.button`
	padding: 10px;
	width: 100%;
	background-color: #00d172;
	color: white;
	margin-top: 40px;
	margin-bottom: 40px;
	text-align: center;
	opacity: ${(props) => props.disabled && 0.5};
`;

const Price = styled.div`
	font-weight: bold;
	font-size: 18px;
`;

const Label = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	font-size: 14px;
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
	margin-top: 15px;
	margin-bottom: 15px;
`;

const Info = styled.div`
	padding-left: 60px;
	padding-right: 60px;
`;

const LargeImage = styled.img`
	object-fit: contain;
	max-height: 80vh;
	border: 1px solid black;
`;

const LargeImageWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	aspect-ratio: 1;
	border: 1px solid black;
`;

const Images = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Div = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: 10% 45% 45%;
`;
