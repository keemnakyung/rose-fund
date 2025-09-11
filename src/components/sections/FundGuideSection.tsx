import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { flexColumnCenter, flexColumn, flexCenterCenter, flexBetweenCenter, flexUnsetStart, flexUnsetEnd, flexColumnCenterCenter } from "../../styles/mixins.style";
import SectionTitle from "../common/SectionTitle";
import SectionWrapper from "../common/SectionWrapper";
import DonationInfo from "../common/DonationInfo";
import sec02_01 from "../../img/section02/sec02-01.jpg";
import sec02_02 from "../../img/section02/sec02-02.jpg";
import sec02_03 from "../../img/section02/sec02-03.jpg";
import sec02_04 from "../../img/section02/sec02-04.jpg";
import sec02_05 from "../../img/section02/sec02-05.jpg";	
import sec02Bg from "../../img/section02/sec02-bg.jpg";
import donationHands from "../../img/donate_hands.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function FundGuideSection() {
	// 각 카드별로 스크롤 효과 훅 생성
	const card1Ref = useScrollFadeIn();
	const card2Ref = useScrollFadeIn();
	const card3Ref = useScrollFadeIn();
	const card4Ref = useScrollFadeIn();
	const card5Ref = useScrollFadeIn();
	
	// DonationInfo용 스크롤 효과 훅
	const donationRef = useScrollFadeIn();

	return (
		<SectionWrapper id="guide" backgroundImage={sec02Bg}>
			<SectionTitle>기금안내</SectionTitle>
			<ContentBox>
				<SupportCategories>
					<CategoryCard ref={card1Ref.ref} $visible={card1Ref.visible} $delay={0}>
						<img src={sec02_01} alt="생활비 지원" />
						<p>고아 청년들의 교육 및 <br />학업 지원 사업</p>
					</CategoryCard>
					<CategoryCard ref={card2Ref.ref} $visible={card2Ref.visible} $delay={0.1}>
						<img src={sec02_02} alt="교육비 지원" />
						<p>고아 청년들의 직업 훈련 및<br /> 취업 연계 지원 사업</p>
					</CategoryCard>
					<CategoryCard ref={card3Ref.ref} $visible={card3Ref.visible} $delay={0.2}>
						<img src={sec02_03} alt="주거비 지원" />
						<p>고아 청년들의 주거 안정 및<br /> 생활 지원 사업</p>
					</CategoryCard>
					<CategoryCard ref={card4Ref.ref} $visible={card4Ref.visible} $delay={0.3}>
						<img src={sec02_04} alt="의료비 지원" />
						<p>고아 청년들의 심리·정서적 안정 및<br /> 자존감 향상을 위한 상담 및<br /> 멘토링 사업</p>
					</CategoryCard>
					<CategoryCard ref={card5Ref.ref} $visible={card5Ref.visible} $delay={0.4}>
						<img src={sec02_05} alt="자립지원" />
						<p>기타 기금의 목적 달성에 <br />필요한 사업</p>
					</CategoryCard>
				</SupportCategories>
				<DonationInfo ref={donationRef.ref} $visible={donationRef.visible} />
			</ContentBox>
		</SectionWrapper>
	);
}

const ContentBox = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	border-radius: 20px;
	${flexColumnCenter}
	gap: 3rem;

	@media (max-width: 1024px) {
		max-width: 100%;
	}

	@media (max-width: 768px) {
		gap: 1rem;
	}
`;

const SupportCategories = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	width: 100%;

	@media (max-width: 768px) {
		gap: 1rem;
	}
`;

const CategoryCard = styled.div<{ $visible: boolean; $delay: number }>`
	background-color: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
	${flexColumn}
	opacity: ${props => props.$visible ? 1 : 0};
	transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(30px)'};
	transition: opacity 0.6s ease, transform 0.6s ease;
	transition-delay: ${props => props.$delay}s;
	position: relative;
	
	&:hover {
		transform: ${props => props.$visible ? 'translateY(-5px)' : 'translateY(30px)'};
	}
	
	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	
	p {
		font-size: 1rem;
		font-weight: 600;
		color: #000;
		line-height: 1.5;
		text-align: center;
		height: 100%;
		padding: 1rem;
		${flexCenterCenter}
	}
`; 