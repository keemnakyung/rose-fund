import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { flexColumnCenter, flexBetweenCenter, flexUnsetStart, flexCenterCenter, flexColumn } from "../../styles/mixins.style";
import SectionTitle from "../common/SectionTitle";
import SectionWrapper from "../common/SectionWrapper";
import DonationInfo from "../common/DonationInfo";
import sec04Bg from "../../img/section04/sec04-bg.jpg";
import sec04_01 from "../../img/section04/sec04-01.png";
import sec04_02 from "../../img/section04/sec04-02.png";
import sec04_03 from "../../img/section04/sec04-03.png";
import sec04_04 from "../../img/section04/sec04-04.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export default function SponsorSection() {
	const donationRef = useScrollFadeIn();
	const testimonial1Ref = useScrollFadeIn();
	const testimonial2Ref = useScrollFadeIn();
	const testimonial3Ref = useScrollFadeIn();
	const testimonial4Ref = useScrollFadeIn();
	const donationHistoryRef = useScrollFadeIn();

	return (
		<SectionWrapper id="sponsor" backgroundImage={sec04Bg}>
			<SectionTitle>후원하기</SectionTitle>
			<SubTitle>당신의 나눔이 <br /> 청년들의 <strong>집</strong>이 되고, <strong>꿈</strong>이 됩니다.</SubTitle>
			
			<TestimonialsContainer>
				<TestimonialCard ref={testimonial1Ref.ref} $visible={testimonial1Ref.visible} $delay={0}>
					<TestimonialImage>
						<img src={sec04_01} alt="후원자 1" />
					</TestimonialImage>
					<TestimonialContent>
						<TestimonialText>"학비 걱정 없이 공부할 수 있게 되어, 꿈을 향해 한 발짝 더 다가갈 수 있었어요."</TestimonialText>
						<TestimonialCategory>- 교육 및 학업 지원</TestimonialCategory>
					</TestimonialContent>
				</TestimonialCard>
				
				<TestimonialCard ref={testimonial2Ref.ref} $visible={testimonial2Ref.visible} $delay={200}>
					<TestimonialImage>
						<img src={sec04_02} alt="후원자 2" />
					</TestimonialImage>
					<TestimonialContent>
						<TestimonialText>"좋아하는 일을 배울 기회를 얻고, 드디어 첫 직장에 출근할 수 있었습니다."</TestimonialText>
						<TestimonialCategory>- 직업 훈련 및 취업 연계</TestimonialCategory>
					</TestimonialContent>
				</TestimonialCard>
				
				<TestimonialCard ref={testimonial3Ref.ref} $visible={testimonial3Ref.visible} $delay={400}>
					<TestimonialImage>
						<img src={sec04_03} alt="후원자 3" />
					</TestimonialImage>
					<TestimonialContent>
						<TestimonialText>"누군가 제 이야기를 들어주고 믿어주니, 제 자신을 다시 사랑하게 되었어요."</TestimonialText>
						<TestimonialCategory>- 심리·정서적 안정 및 멘토링</TestimonialCategory>
					</TestimonialContent>
				</TestimonialCard>
				
				<TestimonialCard ref={testimonial4Ref.ref} $visible={testimonial4Ref.visible} $delay={600}>
					<TestimonialImage>
						<img src={sec04_04} alt="후원자 4" />
					</TestimonialImage>
					<TestimonialContent>
						<TestimonialText>"혼자가 두려웠는데, 따뜻한 집이 생기니 마음이 편안해졌어요."</TestimonialText>
						<TestimonialCategory>주거 안정 및 생활 지원</TestimonialCategory>
					</TestimonialContent>
				</TestimonialCard>
			</TestimonialsContainer>

			<DonationInfo ref={donationRef.ref} $visible={donationRef.visible} />

			<DonationHistory ref={donationHistoryRef.ref} $visible={donationHistoryRef.visible}>
				<HistoryTitle>현재까지 <strong>후원 내역</strong></HistoryTitle>
				<HistoryGrid>
					<HistoryItem>
						<HistoryHeader>
							<HistoryName>박ㅇㅇ 청년</HistoryName>
							<HistoryDate>후원일자 2025-09-09</HistoryDate>
						</HistoryHeader>
						<HistoryDetail>주택 보증금 중 500만원과 20만원의 물품구입비, 그 외 TV, 에어컨 등 가전들</HistoryDetail>
					</HistoryItem>
				</HistoryGrid>
			</DonationHistory>
		</SectionWrapper>
	);
}

const SubTitle = styled.h2`
	font-size: 1.75rem;
	font-weight: 500;
	line-height: 2.5rem;
	color: ${colors.secondary};
	text-align: center;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		line-height: 1.825rem;
		margin-bottom: 2rem;
	}
`;

const TestimonialsContainer = styled.div`
	max-width: 1400px;
	margin: 0 auto 4rem auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	
	@media (max-width: 1024px) {
		max-width: 100%;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (max-width: 768px) {
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
`;

const TestimonialCard = styled.div<{ $visible: boolean; $delay: number }>`
	background-color: white;
	border-radius: 5rem;
	padding: 0.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	display: flex;
	gap: 1.5rem;
	align-items: flex-start;
	${flexCenterCenter}
	overflow: hidden;
	
	/* 초기 상태: 아래에서 시작, 투명 */
	transform: translateY(50px);
	opacity: 0;
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	transition-delay: ${props => props.$delay}ms;
	
	/* 스크롤 시 보이는 상태 */
	${props => props.$visible && `
		transform: translateY(0);
		opacity: 1;
	`}

	@media (max-width: 768px) {
		border-radius: 1rem;
		padding: 1rem;
	}
`;

const TestimonialImage = styled.div`
	flex-shrink: 0;
	
	img {
		width: 100%;
		height: 100%;
		border-radius: 5rem;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		width: 4rem;
		height: 4rem;
	}
`;

const TestimonialContent = styled.div`
	flex: 1;
	${flexColumn}
	gap: 0.75rem;

	@media (max-width: 768px) {
		gap: 0.5rem;
	}
`;

const TestimonialText = styled.p`
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.6;
	color: #000;

	@media (max-width: 768px) {
		line-height: 1.5;
	}
`;

const TestimonialCategory = styled.span`
	font-size: 1rem;
	color: #666;

	@media (max-width: 768px) {
		font-size: 0.875rem;
	}
`;



const DonationHistory = styled.div<{ $visible: boolean }>`
	max-width: 1400px;
	margin: 3.75rem auto 0 auto;
	
	/* 초기 상태: 아래에서 시작, 투명 */
	transform: translateY(50px);
	opacity: 0;
	transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	transition-delay: 200ms;
	
	/* 스크롤 시 보이는 상태 */
	${props => props.$visible && `
		transform: translateY(0);
		opacity: 1;
	`}
`;

const HistoryTitle = styled.h3`
	font-size: 1.75rem;
	font-weight: 500;
	color: ${colors.secondary};
	margin-bottom: 1.5rem;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}
`;

const HistoryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

const HistoryItem = styled.div<{ $empty?: boolean }>`
	padding: 1rem;
	background-color: ${props => props.$empty ? '#f8f9fa' : '#fff'};
	border-radius: 12px;
	border-left: 4px solid ${props => props.$empty ? '#e9ecef' : colors.primary};
	${flexColumnCenter}
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

const HistoryHeader = styled.div`
	width: 100%;
	margin-bottom: 0.8rem;
	${flexBetweenCenter}
`;

const HistoryName = styled.h4`
	font-size: 1.125rem;
	font-weight: 600;
	color: #000;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const HistoryDate = styled.p`
	font-size: 0.875rem;
	color: #999;
`;

const HistoryDetail = styled.p`
	font-size: 1rem;
	color: #666;
	line-height: 1.6;

	@media (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

const EmptyCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const EmptyIcon = styled.div`
	font-size: 2rem;
	margin-bottom: 1rem;
	opacity: 0.6;
`;

const EmptyText = styled.p`
	font-size: 0.9rem;
	color: #666;
	line-height: 1.4;
`; 