import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
	// ESC 키로 모달 닫기
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			// 모달이 열릴 때 body 스크롤 방지
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<ModalHeader>
					<h2>{title}</h2>
					<CloseButton onClick={onClose}>×</CloseButton>
				</ModalHeader>
				<ModalBody>
					{children}
				</ModalBody>
			</ModalContent>
		</ModalOverlay>
	);
}

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	padding: 2rem;
	animation: fadeIn 0.3s ease-out;
	
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ModalContent = styled.div`
	background-color: white;
	border-radius: 12px;
	max-width: 800px;
	width: 100%;
	max-height: 90vh;
	overflow: hidden;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	animation: slideUp 0.3s ease-out;
	
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(30px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid #e5e7eb;
	
	h2 {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 700;
		color: ${colors.secondary};
	}
`;

const CloseButton = styled.button`
	background: none;
	border: none;
	font-size: 2rem;
	cursor: pointer;
	color: #6b7280;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: color 0.2s ease;
	
	&:hover {
		color: ${colors.primary};
	}
`;

const ModalBody = styled.div`
	padding: 2rem;
	max-height: 70vh;
	overflow-y: auto;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`; 