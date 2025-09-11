import { styled } from "styled-components";
import { colors } from "../styles/colors";
import { flexCenterCenter } from "../styles/mixins.style";
import logoWhite from "../img/logo_white.png";

export default function Footer() {
	return (
		<FooterWrapper>
			<FooterContent>
				<LogoSection>
					<LogoImage src={logoWhite} alt="442장미기금 로고" />
				</LogoSection>
				<CopyrightText>
					COPYRIGHT(C)442장미기금. ALL RIGHTS RESERVED.
				</CopyrightText>
			</FooterContent>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.footer`
	background-color: ${colors.secondary};
	padding: 3rem 2rem;
	width: 100%;

	@media (max-width: 768px) {
		padding: 4rem 2rem 7rem 2rem;
	}
`;

const FooterContent = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	${flexCenterCenter}
	flex-direction: column;
	gap: 1rem;
`;

const LogoSection = styled.div`
	${flexCenterCenter}
	gap: 0.75rem;
`;

const LogoImage = styled.img`
	height: auto;
	width: 150px;
`;

const CopyrightText = styled.p`
	font-size: 0.875rem;
	font-weight: 500;
	color: #FFFFFFB2;
	margin: 0;

	@media (max-width: 768px) {
		font-weight: 300;
	}
`; 