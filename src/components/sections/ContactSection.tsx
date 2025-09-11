import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { flexColumnCenter, flexCenterCenter } from "../../styles/mixins.style";
import SectionTitle from "../common/SectionTitle";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import sec05People from "../../img/section05/sec05_people.png";	

export default function ContactSection() {
	const contentRef = useScrollFadeIn();

	return (
		<SectionWrapper id="contact">
			<SectionTitle>문의하기</SectionTitle>
			<ContentBox ref={contentRef.ref} $visible={contentRef.visible}>
				<Illustration className="hidden1024-flex">
					<img src={sec05People} alt="문의 일러스트" />
				</Illustration>
				
				<ContactForm>
					<NoticeSection>
						<NoticeText>
							장미기금에 문의하고 싶은 내용을 아래에 입력해주시면, 성심성의껏 답변드리겠습니다.
						</NoticeText>
					</NoticeSection>
					<form>
						<FormGroup>
							<label>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</label>
							<input type="text" placeholder="이름을 입력해주세요" />
						</FormGroup>
						<FormGroup>
							<label>연&nbsp;&nbsp;락&nbsp;&nbsp;처</label>
							<input 
								type="tel" 
								placeholder="연락처를 입력해주세요" 
								maxLength={13}
								onKeyPress={(e) => {
									if (!/[0-9]/.test(e.key)) {
										e.preventDefault();
									}
								}}
								onInput={(e) => {
									const target = e.target as HTMLInputElement;
									target.value = target.value.replace(/[^0-9]/g, '');
								}}
							/>
						</FormGroup>
						<FormGroup>
							<label>문의내용</label>
							<textarea placeholder="문의하실 내용을 자세히 적어주세요"></textarea>
						</FormGroup>
						<ButtonWrapper>
							<Button>문의하기</Button>
						</ButtonWrapper>
					</form>
				</ContactForm>
			</ContentBox>
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

const ContactForm = styled.div`
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
		${flexColumnCenter}
		gap: 0.5rem;

		label {
			font-size: 1rem;
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
	background-color: #FFF6E2;
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

const NoticeSection = styled.div`
	margin-bottom: 1rem;
	
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