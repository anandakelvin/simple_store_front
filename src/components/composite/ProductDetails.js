import React from "react";
import styled from "styled-components";
import ProductAttribute from "../simple/ProductAttribute";
import CurrenciesContainer from "../container/CurrenciesContainer";
import { find } from "lodash";
import { BeatLoader } from "react-spinners";
import parse from "html-react-parser";

export default class ProductDetails extends React.Component {
	render() {
		const { product, selectedAttributes, selectAttribute } = this.props;
		const { name, inStock, description, gallery, attributes, brand, prices } =
			product;
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
						{attributes.map((attribute) => (
							<ProductAttribute
								key={attribute.name}
								attribute={attribute}
								onSelect={selectAttribute}
								idOfSelected={
									selectedAttributes.find((el) => el.name === attribute.name)
										.selectedItem
								}
							/>
						))}
					</ProductAttributes>
					<Label>Price:</Label>
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
	font-size: 14px;
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
	margin-left: 60px;
	margin-right: 60px;
`;

const LargeImage = styled.img`
	object-fit: contain;
	max-height: 80vh;
`;

const LargeImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 60px;
	margin-right: 60px;
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	aspect-ratio: 1;
`;

const Images = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Div = styled.div`
	display: grid;
	grid-template-columns: 10% 45% 45%;
`;
