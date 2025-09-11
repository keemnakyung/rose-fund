import { styled } from "styled-components";

interface SectionWrapperProps {
	id?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	children: React.ReactNode;
}

export default function SectionWrapper({ id, backgroundColor = "#fff", backgroundImage, children }: SectionWrapperProps) {
	return (
		<StyledSectionWrapper 
			id={id} 
			$backgroundColor={backgroundColor} 
			$backgroundImage={backgroundImage}
		>
			{children}
		</StyledSectionWrapper>
	);
}

const StyledSectionWrapper = styled.section<{ 
	$backgroundColor: string; 
	$backgroundImage?: string; 
}>`
	padding: 7.5rem 2rem;
	background-color: ${props => props.$backgroundColor};
	${props => props.$backgroundImage && `
		background-image: url(${props.$backgroundImage});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
		}
		
		> * {
			position: relative;
			z-index: 2;
		}
	`}

	@media (max-width: 768px) {
		padding: 3rem 1rem;
	}
`; 