import { styled } from "styled-components";
import { colors } from "../styles/colors";
import floatingIcon01 from "../img/floating_icon01.png";
import floatingIcon02 from "../img/floating_icon02.png";
import floatingIcon03 from "../img/floating_icon03.png";
import { flexColumn } from "../styles/mixins.style";

export default function FloatingMenu() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<FloatingContainer>
			<FloatingButton 
				$color={colors.primary}
				onClick={() => scrollToSection('sponsor')}
				title="후원하기"
				className="hide-mobile-480"
			>
				<IconImage src={floatingIcon01} alt="후원하기" className="hide-mobile" />
				<ButtonText>후원하기</ButtonText>
			</FloatingButton>

			<FloatingButton 
				$color="#4A90E2"
				onClick={() => scrollToSection('contact')}
				title="문의하기"
				className="hide-mobile-480"
			>
				<IconImage src={floatingIcon02} alt="문의하기" className="hide-mobile" />
				<ButtonText>문의하기</ButtonText>
			</FloatingButton>

			<FloatingButton 
				$color="#8E8E93"
				onClick={scrollToTop}
				title="상단으로"
			>
				<IconImage src={floatingIcon03} alt="상단으로" className="show-icon-480" />
				<ButtonText className="hide-text-480">상단으로</ButtonText>
			</FloatingButton>
		</FloatingContainer>
	);
}

const FloatingContainer = styled.div`
	position: fixed;
	right: 1rem;
	bottom: 1rem;
    ${flexColumn}
	gap: 0.5rem;
	z-index: 999;

	@media (max-width: 480px) {
		right: 0.5rem;
		bottom: 5.5rem;
		gap: 0.25rem;
	}
`;

const FloatingButton = styled.button<{ $color: string }>`
	width: 140px;
	height: 44px;
	background-color: ${props => props.$color};
	border: none;
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	cursor: pointer;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	transition: all 0.3s ease;
	padding: 0 1rem;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		width: 2.25rem;
		height: 2.25rem;
		gap: 0.25rem;
		padding: 0 0.75rem;
	}
`;

const IconImage = styled.img`
	flex-shrink: 0;

	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

const ButtonText = styled.span`
	color: white;
	font-size: 1rem;
	font-weight: 500;
	font-family: "TJ Joy of singing TTF", "TJJoyofsinging", "Pretendard", Arial, sans-serif;
	white-space: nowrap;

	@media (max-width: 768px) {
		font-size: 0.875rem;
	}
`; 