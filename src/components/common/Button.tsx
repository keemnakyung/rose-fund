import { styled } from "styled-components";
import { colors } from "../../styles/colors";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
	return (
		<StyledButton onClick={onClick} $variant={variant}>
			{children}
		</StyledButton>
	);
}

const StyledButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
	padding: 10px 24px;
	border-radius: 50px;
	border: 1px solid ${colors.primary};
	background-color: transparent;
	color: ${colors.primary};
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.3s ease;
	
	&:hover {
		background-color: ${colors.primary};
		color: white;
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}
`; 