import { styled } from "styled-components";
import { colors } from "../../styles/colors";

interface SectionTitleProps {
	children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
	return <StyledSectionTitle>{children}</StyledSectionTitle>;
}

const StyledSectionTitle = styled.h1`
	color: ${colors.secondary};
	text-align: center;
	font-family: "TJ Joy of singing TTF", "TJJoyofsinging", "Pretendard", Arial, sans-serif;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
    width: fit-content;
    margin: 0 auto 2.5rem auto;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		margin: 0 auto 1.5rem auto;
	}
`;  
