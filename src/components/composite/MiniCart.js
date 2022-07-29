import { find } from "lodash";
import React from "react";
import { withRouter } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import AppContext from "../../contexts/AppContext";
import CartContainer from "../container/CartContainer";
import CurrenciesContainer from "../container/CurrenciesContainer";
import CartProducts from "./CartProducts";

class MiniCart extends React.Component {
	static contextType = AppContext;

	render() {
		const { history } = this.props;
		return (
			<Div onClick={(e) => e.stopPropagation()}>
				<CartContainer>
					{({
						value,
						reset,
						cartAdd,
						cartRemove,
						selectAttribute,
						updatePrices,
					}) => {
						if (value.length === 0) {
							return <Centered>Your cart is empty.</Centered>;
						}
						const quantities = value.reduce((acc, el) => acc + el.quantity, 0);
						return (
							<>
								<div>My Bag, {quantities} items</div>
								<CartProducts
									cartProducts={value}
									cartAdd={cartAdd}
									cartRemove={cartRemove}
									selectAttribute={selectAttribute}
									updatePrices={updatePrices}
									miniVersion={true}
								/>
								<CurrenciesContainer>
									{({ selectedCurrency, status }) => {
										if (status === "succeeded") {
											const total = value.reduce(
												(acc, el) =>
													acc +
														find(
															el.prices,
															(e) =>
																e.currency.symbol === selectedCurrency.symbol
														)?.amount ?? 0,
												0
											);
											return (
												<InfoDiv>
													<Info>
														<div>Total:</div>
														<Bold>{`${selectedCurrency.symbol}${
															Math.round((total + Number.EPSILON) * 100) / 100
														}`}</Bold>
													</Info>
													<ActionButtonsWrapper>
														<CallToActionButtonSecondary
															onClick={() => {
																this.context.toggleShowCartOverlay();
																history.push("/cart");
															}}
														>
															VIEW BAG
														</CallToActionButtonSecondary>
														<CallToActionButton onClick={reset}>
															CHECKOUT
														</CallToActionButton>
													</ActionButtonsWrapper>
												</InfoDiv>
											);
										}
										return <BeatLoader />;
									}}
								</CurrenciesContainer>
							</>
						);
					}}
				</CartContainer>
			</Div>
		);
	}
}

export default MiniCart = withRouter(MiniCart);

const ActionButtonsWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

const Centered = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100px;
`;

const Bold = styled.div`
	font-weight: 600;
`;

const Div = styled.div`
	width: 500px;
	max-height: 80vh;
	overflow: scroll;
	padding: 20px;
	background-color: white;
`;

const Info = styled.div`
	display: flex;
	justify-content: space-between;
`;

const InfoDiv = styled.div`
	margin-top: 20px;
`;

const CallToActionButton = styled.button`
	padding: 10px;
	width: 100%;
	font-size: 14px;
	background-color: #00d172;
	color: white;
	margin-top: 10px;
	text-align: center;
`;

const CallToActionButtonSecondary = styled.button`
	padding: 10px;
	width: 100%;
	font-size: 14px;
	margin-top: 10px;
	text-align: center;
	border: 1px solid black;
`;
