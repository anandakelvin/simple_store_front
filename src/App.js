import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CategoriesContainer from "./components/container/CategoriesContainer";
import CartOverlay from "./components/layout/CartOverlay";
import Navbar from "./components/layout/Navbar";
import CartRoute from "./components/routes/CartRoute";
import CategoryRoute from "./components/routes/CategoryRoute";
import AppContext from "./contexts/AppContext";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showCartOverlay: false,
		};

		this.toggleShowCartOverlay = this.toggleShowCartOverlay.bind(this);
	}

	toggleShowCartOverlay() {
		this.setState({ showCartOverlay: !this.state.showCartOverlay });
	}

	render() {
		return (
			<AppContext.Provider
				value={{ toggleShowCartOverlay: this.toggleShowCartOverlay }}
			>
				<Div>
					<Header>
						<Navbar />
					</Header>
					<RelativeWrapper>
						<CartOverlay isShowed={this.state.showCartOverlay} />
						<CategoriesContainer>
							{({ value, status }) => {
								if (status === "succeeded") {
									return (
										<Switch>
											<Route
												path={"/cart"}
												render={(routeProps) => <CartRoute {...routeProps} />}
											/>
											<Route
												path={"/categories/:categoryName"}
												render={(routeProps) => (
													<CategoryRoute {...routeProps} />
												)}
											/>
											<Redirect to={"/categories/" + value[0].name} />
										</Switch>
									);
								}
								return <></>;
							}}
						</CategoriesContainer>
					</RelativeWrapper>
				</Div>
			</AppContext.Provider>
		);
	}
}

const Div = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Header = styled.div`
	position: sticky;
	top: 0;
	z-index: 11;
`;

const RelativeWrapper = styled.div`
	position: relative;
	flex-grow: 1;
	overflow: scroll;
`;

export default App;
