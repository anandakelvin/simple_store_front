import React from "react";
import ProductDetails from "../composite/ProductDetails";
import ProductContainer from "../container/ProductContainer";
import PageContent from "../layout/Page";

export default class ProductRoute extends React.Component {
	render() {
		const { match } = this.props;
		const { productId: id } = match.params;
		return (
			<ProductContainer productId={id}>
				{({ value, selectedAttributes, selectAttribute, status }) => {
					if (status === "succeeded") {
						if (value === null) {
							return (
								<PageContent.Centered>
									Product is not found.
								</PageContent.Centered>
							);
						}
						return (
							<PageContent>
								<ProductDetails
									product={value}
									selectedAttributes={selectedAttributes}
									selectAttribute={selectAttribute}
								/>
							</PageContent>
						);
					}
					return <PageContent isLoading={true} />;
				}}
			</ProductContainer>
		);
	}
}
