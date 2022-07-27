import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CategoryProducts from "../composite/CategoryProducts";
import CategoryContainer from "../container/CategoryContainer";
import Page from "../layout/Page";
import ProductRoute from "./ProductRoute";

export default class CategoryRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { categoryName: name } = match.params;
		return (
			<CategoryContainer categoryName={name}>
				{({ value, status }) => {
					if (status === "succeeded") {
						if (value === null) {
							return <Page.Centered>Category is not found.</Page.Centered>;
						}
						return (
							<Switch>
								<Route exact path={match.path}>
									<Page>
										<Title>{value.name.capitalize()}</Title>
										<CategoryProducts products={value.products} />
									</Page>
								</Route>
								<Route
									path={`${match.path}/products/:productId`}
									render={(routeProps) => <ProductRoute {...routeProps} />}
								/>
								<Route path="*">
									<Redirect to={`/categories/${name}`} />
								</Route>
							</Switch>
						);
					}
					return <Page isLoading={true} />;
				}}
			</CategoryContainer>
		);
	}
}

const Title = styled.div`
	font-size: 40px;
	margin-bottom: 20px;
`;
