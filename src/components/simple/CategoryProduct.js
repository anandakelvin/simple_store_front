import React from "react";
import { withRouter } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import styled from "styled-components";
import Price from "./Price";
import CartContainer from "../container/CartContainer";

class CategoryProduct extends React.Component {
	render() {
		const { product, history, match } = this.props;
		const { id, name, gallery, brand, prices, inStock, attributes } = product;
		return (
			<Button
				onClick={() => history.push(`${match.url}/products/${id}`)}
				inStock={inStock}
			>
				{!inStock && <UnavailableOverlay>OUT OF STOCK</UnavailableOverlay>}
				<ImageWrapper>
					<CartContainer>
						{({ cartAddProduct }) => (
							<CartCircle
								onClick={(e) => {
									e.stopPropagation();
									cartAddProduct({
										product: id,
										selectedAttributes: attributes.map((el) => ({
											name: el.name,
											selectedItem: el.items[0].id,
										})),
									});
								}}
							>
								<BsCartPlus size={25} />
							</CartCircle>
						)}
					</CartContainer>
					<Image src={gallery[0]} />
				</ImageWrapper>
				<Gap />
				<ProductBrandName>{`${brand} ${name}`}</ProductBrandName>
				<PriceDiv>
					<Price prices={prices} />
				</PriceDiv>
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

const ImageWrapper = styled.div`
	position: relative;
`;

const CartCircle = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	bottom: -10px;
	right: 10px;
	border-radius: 50px;
	background-color: #5ece7b;
	color: white;
`;

const Gap = styled.div`
	height: 20px;
`;

const ProductBrandName = styled.div`
	color: gray;
	font-weight: 300;
	text-align: left;
`;

const PriceDiv = styled.div`
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
	& ${CartCircle} {
		transition: opacity 0.3s ease-in-out;
		opacity: 0;
	}
	&:hover ${CartCircle} {
		opacity: ${(props) => (props.inStock ? 1 : 0)};
		transition: opacity 0.3s ease-in-out;
	}
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	aspect-ratio: 1;
`;
