import { find } from "lodash";
import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import CartProducts from "../composite/CartProducts";
import CartContainer from "../container/CartContainer";
import CurrenciesContainer from "../container/CurrenciesContainer";
import PageContent from "../layout/Page";

export default class CartRoute extends React.Component {
	render() {
		return (
			<PageContent>
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
							return (
								<PageContent.Centered>Your cart is empty.</PageContent.Centered>
							);
						}
						const quantities = value.reduce((acc, el) => acc + el.quantity, 0);
						return (
							<>
								<Title>Cart</Title>
								<CartProducts
									cartProducts={value}
									cartAdd={cartAdd}
									cartRemove={cartRemove}
									selectAttribute={selectAttribute}
									updatePrices={updatePrices}
								/>
								<CurrenciesContainer>
									{({ selectedCurrency, status }) => {
										if (status === "succeeded") {
											const total = value.reduce(
												(acc, el) =>
													acc +
													(find(
														el.prices,
														(e) => e.currency.symbol === selectedCurrency.symbol
													)?.amount ?? 0) *
														el.quantity,
												0
											);
											return (
												<InfoDiv>
													<Info>
														<div>Quantity:</div>
														<Bold>{quantities}</Bold>
													</Info>
													<Info>
														<div>Tax 21%:</div>
														<Bold>{`${selectedCurrency.symbol}${
															Math.round(
																(total * 0.21 + Number.EPSILON) * 100
															) / 100
														}`}</Bold>
													</Info>
													<Info>
														<div>Total:</div>
														<Bold>{`${selectedCurrency.symbol}${
															Math.round(
																(total + total * 0.21 + Number.EPSILON) * 100
															) / 100
														}`}</Bold>
													</Info>
													<CallToActionButton onClick={reset}>
														ORDER
													</CallToActionButton>
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
			</PageContent>
		);
	}
}

const CallToActionButton = styled.button`
	padding: 10px;
	width: 100%;
	font-size: 14px;
	background-color: #00d172;
	color: white;
	margin-top: 10px;
	text-align: center;
`;

const Bold = styled.div`
	font-weight: 600;
`;

const Info = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
`;

const InfoDiv = styled.div`
	width: 200px;
	margin-top: 20px;
`;

const Title = styled.div`
	font-size: 40px;
	margin-bottom: 10px;
	text-transform: capitalize;
`;
