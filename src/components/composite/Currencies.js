import React from "react";
import styled from "styled-components";
import Currency from "../simple/Currency";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import CurrenciesContainer from "../container/CurrenciesContainer";
import { BeatLoader } from "react-spinners";

export default class Currencies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpened: false,
		};

		this.ref = React.createRef();
		this.handleToggleisOpened = this.handleToggleisOpened.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside(event) {
		if (this.ref.current && this.state.isOpened) {
			if (this.ref && !this.ref.current.contains(event.target)) {
				this.setState({ isOpened: !this.state.isOpened });
			}
		}
	}

	handleToggleisOpened() {
		this.setState({ isOpened: !this.state.isOpened });
	}

	render() {
		return (
			<CurrenciesContainer>
				{({ value, selectedCurrency, setSelectedCurrency, status }) => {
					if (status === "succeeded") {
						return (
							<RelativeWrapper ref={this.ref}>
								<Button onClick={this.handleToggleisOpened}>
									{selectedCurrency?.symbol}
									{this.state.isOpened ? <BiChevronUp /> : <BiChevronDown />}
								</Button>
								{this.state.isOpened && (
									<ItemsWrapper>
										{value.map((el, index) => (
											<Currency
												key={index}
												onClick={(currency) => {
													this.handleToggleisOpened();
													setSelectedCurrency(currency);
												}}
												currency={el}
											/>
										))}
									</ItemsWrapper>
								)}
							</RelativeWrapper>
						);
					}
					return <BeatLoader />;
				}}
			</CurrenciesContainer>
		);
	}
}

const ItemsWrapper = styled.div`
	transform-origin: top right;
	position: absolute;
	right: 0;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	margin-top: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	background-color: white;
`;

const Button = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: white;
`;

const RelativeWrapper = styled.div`
	position: relative;
	display: inline-block;
	text-align: left;
	z-index: 10;
`;
