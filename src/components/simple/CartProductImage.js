import React from "react";
import styled from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default class CartProductImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedImageIndex: 0,
		};

		this.handleNextImage = this.handleNextImage.bind(this);
		this.handlePreviousImage = this.handlePreviousImage.bind(this);
	}

	handleNextImage() {
		const maxIndex = this.props.gallery.length - 1;
		this.setState({
			selectedImageIndex:
				this.state.selectedImageIndex === maxIndex
					? 0
					: this.state.selectedImageIndex + 1,
		});
	}

	handlePreviousImage() {
		const maxIndex = this.props.gallery.length - 1;
		this.setState({
			selectedImageIndex:
				this.state.selectedImageIndex === 0
					? maxIndex
					: this.state.selectedImageIndex - 1,
		});
	}

	render() {
		const { gallery } = this.props;
		return (
			<ImageWrapper>
				<Image src={gallery[this.state.selectedImageIndex]} />
				<ImageButtonsWrapper>
					<ImageButton onClick={this.handleNextImage}>
						<BiChevronLeft />
					</ImageButton>
					<ImageButton onClick={this.handlePreviousImage}>
						<BiChevronRight />
					</ImageButton>
				</ImageButtonsWrapper>
			</ImageWrapper>
		);
	}
}

const ImageButton = styled.button`
	border: none;
	background-color: black;
	color: white;
	font-size: 14px;
	width: 15px;
	height: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ImageButtonsWrapper = styled.div`
	position: absolute;
	display: flex;
	gap: 10px;
	bottom: 10px;
	right: 10px;
`;

const Image = styled.img`
	object-fit: cover;
	position: absolute;
	width: 100%;
	height: 100%;
`;

const ImageWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
	width: 200px;
`;
