import { find } from "lodash";
import React from "react";
import { withRouter } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import CurrenciesContainer from "../container/CurrenciesContainer";

class CategoryProduct extends React.Component {
	render() {
		const { product, history, match } = this.props;
		const { id, name, gallery, brand, prices, inStock } = product;
		return (
			<Button onClick={() => history.push(`${match.url}/products/${id}`)}>
				{!inStock && <UnavailableOverlay>OUT OF STOCK</UnavailableOverlay>}
				<Image src={gallery[0]} />
				<Gap />
				<ProductBrandName>{`${brand} ${name}`}</ProductBrandName>
				<CurrenciesContainer>
					{({ selectedCurrency, status }) => {
						if (status === "succeeded") {
							const price = find(
								prices,
								(e) => e.currency.symbol === selectedCurrency.symbol
							);
							return (
								<ProductPrice>{`${price.currency.symbol}${price.amount}`}</ProductPrice>
							);
						}
						return <BeatLoader />;
					}}
				</CurrenciesContainer>
			</Button>
		);
	}
}

export default CategoryProduct = withRouter(CategoryProduct);

const UnavailableOverlay = styled.div`
	position: absolute;
	z-index: 1;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.5);
	color: gray;
	font-size: 16px;
`;

const Gap = styled.div`
	height: 20px;
`;

const ProductBrandName = styled.div`
	color: gray;
	font-weight: 300;
	text-align: left;
`;

const ProductPrice = styled.div`
	font-weight: 500;
	text-align: left;
`;

const Button = styled.button`
	position: relative;
	padding: 20px;
	align-items: baseline;
	display: flex;
	flex-direction: column;
	background-color: white;
	transition: box-shadow 0.3s ease-in-out;

	:hover {
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	aspect-ratio: 1;
`;
