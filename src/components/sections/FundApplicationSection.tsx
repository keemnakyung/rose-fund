import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { flexColumnCenter, flexBetweenCenter, flexColumnCenterCenter } from "../../styles/mixins.style";
import SectionTitle from "../common/SectionTitle";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";
import Modal from "../common/Modal";
import sec03People from "../../img/section03/sec03_people.png";
import previewImage from "../../img/section03/preview.jpg";
import { useState } from "react";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import useMailsend from "@/hooks/useMailsend";

export default function FundApplicationSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const contentRef = useScrollFadeIn();
	const {
		mailsendForData,
		changeHandler,
		submitHandler,
	} = useMailsend({ contentTitle: "신청사연" });

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<SectionWrapper id="application">
			<SectionTitle>기금신청</SectionTitle>
			<ContentBox ref={contentRef.ref} $visible={contentRef.visible}>
				<Illustration className="hidden1024-flex">
					<img src={sec03People} alt="기금신청 일러스트" />
				</Illustration>
				<ApplicationForm>
					<form>
						<FormGroup>
							<label>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</label>
							<input 
								type="text" 
								placeholder="이름을 입력해주세요" 
								name="userName"
								value={mailsendForData.userName}
								onChange={changeHandler}
							/>
						</FormGroup>
						<FormGroup>
							<label>연&nbsp;&nbsp;락&nbsp;&nbsp;처</label>
							<input 
								type="tel"
								placeholder="연락처를 입력해주세요"
								name="userPhone"
								value={mailsendForData.userPhone}
								onChange={changeHandler}
							/>
						</FormGroup>
						<FormGroup>
							<label>신청사연</label>
							<textarea 
								placeholder="신청 사연을 자세히 적어주세요"
								name="content"
								value={mailsendForData.content}
								onChange={changeHandler}
							/>
						</FormGroup>
						<ButtonWrapper>
							<Button type="button" onClick={submitHandler}>기금 신청하기</Button>
						</ButtonWrapper>
					</form>
					
					<NoticeSection>
						<NoticeText>
							기금 신청완료 시 '장미기금'에서 위 연락처로 연락드립니다.
						</NoticeText>
						<NoticeText>
							장미기금 선정 시 아래 양식의 <strong>경제적 자립을 위한 나의 다짐</strong>을 작성·제출하게 됩니다.
						</NoticeText>
						<PreviewButton onClick={openModal}>
							<span><strong>경제적 자립을 위한 나의 다짐</strong> 양식 미리보기</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M13.5933 18.4399L20 11.9999L13.5933 5.55989C13.5355 5.48391 13.462 5.42125 13.3778 5.37614C13.2936 5.33104 13.2007 5.30455 13.1054 5.29847C13.0101 5.29239 12.9146 5.30686 12.8253 5.3409C12.7361 5.37493 12.6552 5.42775 12.5882 5.49576C12.5211 5.56377 12.4695 5.6454 12.4367 5.73511C12.404 5.82482 12.3909 5.92052 12.3983 6.01573C12.4057 6.11095 12.4336 6.20345 12.4799 6.28698C12.5262 6.37051 12.5899 6.44312 12.6667 6.49989L17.46 11.3332L4.70667 11.3332C4.52985 11.3332 4.36029 11.4035 4.23526 11.5285C4.11024 11.6535 4.04 11.8231 4.04 11.9999C4.04 12.1767 4.11024 12.3463 4.23526 12.4713C4.36029 12.5963 4.52985 12.6666 4.70667 12.6666L17.46 12.6666L12.6667 17.4999C12.542 17.6254 12.4723 17.7953 12.473 17.9722C12.4736 18.1492 12.5445 18.3186 12.67 18.4432C12.7955 18.5679 12.9654 18.6376 13.1424 18.6369C13.3193 18.6363 13.4887 18.5654 13.6133 18.4399L13.5933 18.4399Z" fill="#666666"/>
							</svg>
						</PreviewButton>
					</NoticeSection>
				</ApplicationForm>
			</ContentBox>

			<Modal 
				isOpen={isModalOpen} 
				onClose={closeModal} 
				title="경제적 자립을 위한 나의 다짐 양식"
			>
				<PreviewImageContainer>
					<img src={previewImage} alt="다짐 양식 미리보기" />
				</PreviewImageContainer>
			</Modal>
		</SectionWrapper>
	);
}

const ContentBox = styled.div<{ $visible: boolean }>`
	max-width: 1400px;
	margin: 0 auto;
	border-radius: 20px;
	display: flex;
	align-items: stretch;
	opacity: ${props => props.$visible ? 1 : 0};
	transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(30px)'};
	transition: opacity 0.6s ease, transform 0.6s ease;
	
	@media (max-width: 1024px) {
		max-width: 100%;
	}
	
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

const ApplicationForm = styled.div`
	flex: 1;
	background-color: #f5f5f5;
	border-radius: 0 2.5rem 2.5rem 0;
	padding: 2rem;
	
	h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: ${colors.secondary};
		margin-bottom: 2rem;
		text-align: center;
	}
	
	form {
		${flexColumnCenter}
		gap: 1.5rem;
	}

	@media (max-width: 1024px) {
		border-radius: 1.5rem;
	}

	@media (max-width: 768px) {
		padding: 2rem 1rem;
	}
`;

const FormGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	
	&:has(textarea) {
		align-items: flex-start;
	}
	
	label {
		font-size: 1.125rem;
		font-weight: 600;
		color: #000;
		min-width: 80px;
		flex-shrink: 0;
		font-family: "TJ Joy of singing TTF", "TJJoyofsinging", "Pretendard", Arial, sans-serif;
	}
	
	input, textarea {
		flex: 1;
		padding: 0.8rem;
		border: 0;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-family: inherit;
		
		&:focus {
			outline: none;
			border-color: ${colors.primary};
		}
	}
	
	textarea {
		min-height: 15rem;
		resize: vertical;
	}

	@media (max-width: 768px) {
		${flexColumnCenterCenter}
		gap: 0.5rem;

		label {
			font-size: 1rem;
			min-width: auto;
		}

		input, textarea {
			width: 100%;
		}

		&:has(textarea) {
		align-items: center;
	}
	}
`;

const Illustration = styled.div`
	flex: 0 0 40%;
	text-align: center;
	background-color: #F0F3E2;
	border-radius: 2.5rem 0 0 2.5rem;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	
	img {
		max-width: 100%;
		height: auto;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;

	@media (max-width: 768px) {
		margin-top: 0rem;
	}
`;

const SubmitButton = styled.button`
	width: 100%;
	background-color: ${colors.primary};
	color: white;
	border: none;
	padding: 1.2rem;
	border-radius: 8px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	transition: background-color 0.3s ease;
	
	&:hover {
		background-color: #c43e3e;
	}
`;

const PrivacyNotice = styled.p`
	font-size: 0.8rem;
	color: #666;
	text-align: center;
	margin-top: 1rem;
`; 

const NoticeSection = styled.div`
	margin-top: 2rem;
	padding-top: 2rem;
	border-top: 1px solid #e5e7eb;

	@media (max-width: 768px) {
		margin-top: 1rem;
		padding-top: 1rem;
	}
`;

const NoticeText = styled.p`
	font-size: 1rem;
	color: ${colors.secondary};
	line-height: 1.6;
	
	&::before {
		content: '※';
		color: ${colors.secondary};
		margin-right: 0.5rem;
	}
`;

const PreviewButton = styled.button`
	width: 100%;
	padding: 1rem;
	border: 1px solid #d1d5db;
	border-radius: 8px;
	background-color: white;
	color: #666;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
	${flexBetweenCenter}
	margin-top: 0.5rem;

	span strong {
		color: #000;
	}
	
	&:hover {
		background-color: #f9fafb;
		border-color: ${colors.primary};
	}

	@media (max-width: 768px) {
		justify-content: center;

		span {
			font-size: 0.875rem;
		}

		svg {
			display: none;
		}
	}
`;

const PledgeImageList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const PledgeImageItem = styled.div`
	width: 100%;
	
	img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
`; 

const PreviewImageContainer = styled.div`
	width: 100%;
	text-align: center;
	
	img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
`; 