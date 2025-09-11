import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { flexBetweenCenter, flexUnsetStart, flexColumnCenterCenter, flexColumn, flexUnsetEnd } from "../../styles/mixins.style";
import donationHands from "../../img/donate_hands.png";
import { forwardRef } from "react";

interface DonationInfoProps {
	$visible?: boolean;
}

const DonationInfo = forwardRef<HTMLDivElement, DonationInfoProps>(
	({ $visible = true }, ref) => {
		return (
			<DonationInfoWrapper ref={ref} $visible={$visible}>
				<DonationContent>
					<TitleSection>
						<TitleBadge>442장미기금 후원 계좌</TitleBadge>
						<TitleText>후원을 원하시는 분은<br className="mobile-br" /> 아래 계좌로 후원부탁드립니다.</TitleText>
					</TitleSection>
					
					<AccountInfo>
						농협 351-1374-6986-13 <br className="mobile-br" /> (예금주: 442장미기금)
					</AccountInfo>
					
					<InfoList>
						<InfoItem>
							<InfoTitle>연말정산불가 :</InfoTitle>
							<InfoText>현재 고유번호증은 있으나 후원금에 따른 연말정산을 하지 못하므로 이 점 양해 부탁드립니다.</InfoText>
						</InfoItem>
						<InfoItem>
							<InfoTitle>지원 대상 선정 :</InfoTitle>
							<InfoText>지금은 개인신청이 아닌 회원들의 추천에 의해 지원대상을 선정하고 있으며, 추후 체계가 잡히면 개인 신청도 받도록 하겠습니다.</InfoText>
						</InfoItem>
						<InfoItem>
							<InfoTitle>지원 절차 :</InfoTitle>
							<InfoText>회원들의 추천 → 면접 → 지원 결정 → '경제적 자립을 위한 나의 다짐' 제출 → 지원완료</InfoText>
						</InfoItem>
					</InfoList>
				</DonationContent>
				<DonationIllustration>
					<img src={donationHands} alt="후원하기 일러스트" />
				</DonationIllustration>
			</DonationInfoWrapper>
		);
	}
);

DonationInfo.displayName = 'DonationInfo';

export default DonationInfo;

const DonationInfoWrapper = styled.div<{ $visible: boolean }>`
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	background-color: white;
	border-radius: 20px;
	padding: 3rem;
	${flexBetweenCenter}
	gap: 3rem;
	position: relative;
	opacity: ${props => props.$visible ? 1 : 0};
	transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(30px)'};
	transition: opacity 0.6s ease, transform 0.6s ease;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	
	@media (max-width: 1024px) {
		max-width: 100%;
	}
	
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
		padding: 2rem 1.5rem 10rem 1.5rem;
	}
`;

const DonationContent = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		${flexColumnCenterCenter}
	}
`;

const TitleSection = styled.div`
	margin-bottom: 0.75rem;
	${flexUnsetEnd}
	gap: 0.5rem;

	@media (max-width: 768px) {
		${flexColumnCenterCenter}
	}
`;

const TitleBadge = styled.div`
	background-color: ${colors.primary};
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	display: inline-block;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const TitleText = styled.p`
	font-size: 1rem;
	color: #666;
	line-height: 1.6;
	margin: 0;

	@media (max-width: 768px) {
		text-align: center;
		line-height: 1.4;
	}
`;

const AccountInfo = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
	color: #000;
	background-color: #FFE4E1;
	width: fit-content;
	padding: 0.5rem;

	@media (max-width: 768px) {
		font-size: 1.25rem;
		text-align: center;
	}
`;

const InfoList = styled.div`
	${flexColumn}
	margin-top: 1rem;

	@media (max-width: 1024px) {
		margin-bottom: 14rem;
	}

	@media (max-width: 768px) {
		margin-bottom: 2rem;
		gap: 0.5rem;
	}
`;

const InfoItem = styled.div`
	${flexUnsetStart}
	gap: 0.5rem;

	@media (max-width: 768px) {
		${flexColumn}
		gap: 0;
	}
`;

const InfoTitle = styled.h4`
	font-size: 1rem;
	font-weight: 700;
	color: ${colors.secondary};
	margin: 0;
	position: relative;
	
	&::before {
		content: '•';
		font-size: 1.2rem;
		margin-right: 0.5rem;
	}
`;

const InfoText = styled.p`
	color: #666;
	line-height: 1.6;
	margin: 0;
	flex: 1;

	@media (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

const DonationIllustration = styled.div`
	flex: 1;
	text-align: center;
	position: absolute;
	bottom: 0;
	right: 0;
	
	img {
		max-width: 100%;
		height: auto;
		max-height: 400px;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	@media (max-width: 1024px) {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 0 20px 20px;
		
		img {
			height: 100%;
			max-height: none;
			object-fit: contain;
		}
	}
`; 