import React from "react";
import styled from "styled-components";
import CartProduct from "../simple/CartProduct";

export default class CartProducts extends React.Component {
	render() {
		const {
			cartProducts,
			cartAdd,
			cartRemove,
			selectAttribute,
			updatePrices,
			miniVersion,
		} = this.props;
		return (
			<Div>
				{cartProducts.map((el, index) => {
					return (
						<React.Fragment key={index}>
							{index === 0 && !miniVersion && <Divider />}
							<CartProduct
								cartProduct={el}
								cartAdd={() => cartAdd({ cartProductIndex: index })}
								cartRemove={() => cartRemove({ cartProductIndex: index })}
								selectAttribute={(selectedAttribute) =>
									selectAttribute({
										cartProductIndex: index,
										selectedAttribute,
									})
								}
								updatePrices={(prices) =>
									updatePrices({ prices, cartProductIndex: index })
								}
								miniVersion={miniVersion}
							/>
							{!miniVersion && <Divider />}
						</React.Fragment>
					);
				})}
			</Div>
		);
	}
}

const Div = styled.div`
	display: flex;
	flex-direction: column;
`;

const Divider = styled.hr`
	border-color: #f6f5f6;
`;
