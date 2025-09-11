import { styled } from "styled-components";
import mainVisualBg from '../img/main_visual_bg.jpg';
import mainVisualPeople from '../img/main_visual_peple.png';
import { colors } from "../styles/colors";
import { flexCenterCenter, flexColumnCenter } from "../styles/mixins.style";

export default function MainVisual() {
	return (
		<MainVisualWrapper>
			<MainVisualContent>
				<h1>청년의 성공적인 자립을 위해 <br /><span>442장미기금</span>이 동행합니다.</h1>
				<ImageContainer>
					<PeopleImage src={mainVisualPeople} alt="메인비주얼 사람들" />
				</ImageContainer>
			</MainVisualContent>
		</MainVisualWrapper>
	);
}

const MainVisualWrapper = styled.section`
	width: 100%;
	height: 100vh;
	background-image: url(${mainVisualBg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	${flexCenterCenter}
	position: relative;
	overflow: hidden;
	
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
`;

const MainVisualContent = styled.div`
	text-align: center;
	color: #fff;
	z-index: 2;
	position: relative;
	${flexColumnCenter}
	max-width: 1400px;
	width: 100%;
	padding: 0 2rem;
	
	h1 {
		font-family: 'TJJoyofsinging', 'Pretendard', Arial, sans-serif;
		font-size: clamp(2rem, 2.5vw, 3.5rem);
		font-weight: 900;
        line-height: clamp(3rem, 4vw, 5rem);
		margin-bottom: 2rem;
		color: ${colors.secondary};
		animation: slideUp 1.5s ease-out;
		
		span {
			color: ${colors.primary};
		}
		
		@keyframes slideUp {
			from {
				opacity: 0;
				transform: translateY(50px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
		
		@media (max-width: 768px) {
			font-size: 2rem;
			line-height: 3rem;
			margin-bottom: 1.5rem;
		}

		@media (max-width: 480px) {
			font-size: 1.5rem;
			line-height: 2.5rem;
			margin-bottom: 1rem;
		}
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	height: auto;
	max-height: clamp(300px, 50vh, 600px);
    margin-top: 4rem;
	${flexCenterCenter}
	
	@media (max-width: 768px) {
		max-height: 40vh;
		margin-top: 3rem;
	}
`;

const PeopleImage = styled.img`
	max-width: 100%;
	height: clamp(300px, 40vh, 500px);
	object-fit: contain;
	animation: rotate 20s linear infinite;
	
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
