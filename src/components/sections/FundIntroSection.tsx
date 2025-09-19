import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { flexColumnCenter, flexColumnCenterCenter, flexUnsetEnd } from "../../styles/mixins.style";
import SectionTitle from "../common/SectionTitle";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";
import Modal from "../common/Modal";
import sec01People from "../../img/section01/sec01_people.png";
import logo from "../../img/logo_color.png";
import { useState } from "react";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

// 정관 이미지들 import
import incorporation01 from "../../img/section01/incorporation01.jpg";
import incorporation02 from "../../img/section01/incorporation02.jpg";
import incorporation03 from "../../img/section01/incorporation03.jpg";
import incorporation04 from "../../img/section01/incorporation04.jpg";
import incorporation05 from "../../img/section01/incorporation05.jpg";
import incorporation06 from "../../img/section01/incorporation06.jpg";

export default function FundIntroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const contentRef = useScrollFadeIn();

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const charterImages = [incorporation01, incorporation02, incorporation03, incorporation04, incorporation05, incorporation06];

	return (
		<SectionWrapper id="intro">
			<SectionTitle>기금소개</SectionTitle>
			<ContentBox ref={contentRef.ref} $visible={contentRef.visible}>
				<TextContent>
					<TitleWithLogo>
						<span>고아 청년들의 자립을 돕는</span>
						<img src={logo} alt="442장미기금" />
					</TitleWithLogo>
					<p>당신의 작은 나눔이 <br className="mobile-br" /> 누군가에겐 인생의 새로운 출발선이 됩니다.</p>
					<div className="description">
						<StorySection>
							<h3>442장미기금 설립 비하인드 스토리</h3>
							<p>
								평소 고아 청년들의 자립에 관심이 많으신 경남 지역 모 교회 권사님이 계셨습니다. <br className="hide-br-768" />
								권사님께서는 자신의 집에 방들을 수리하여 원에서 나오는 청년들이 묵을 거처를 마련하기도 했지만 <br className="hide-br-768" />
								청년들이 독립적인 공간을 원한다는 소식을 듣고 어떻게 해야 하나 고민하며 기도하고 계셨습니다. 
								<br/><br/>
								그러던 찰나에 부산지역의 한 교회에서 사역하던 목회자를 만났습니다. 이 목회자는 권사님께서 섬기시는 한 때 교회의 부교역자로 사역했었습니다. <br className="hide-br-768" />
								이 목회자가 사역지를 다른 교회로 옮긴 이후에도 가끔 권사님을 만나 교제를 하고 하나님의 나라 확장을 위해 함께 기도하곤 했었습니다. <br className="hide-br-768" />
								권사님을 만난 목회자는 자신이 사역하는 교회에 고아 청년들이 많다는 소식을 권사님께 하게 되었고, 이에 자신이 그동안 모아 놓으신 거의 전재산을 고아들의 자립을 위해 헌신하셨습니다.
								권사님의 소중한 헌신으로 442장미기금이 시작되었습니다.
							</p>
							<h3>442장미기금 명칭의 의미</h3>
							<p>
								권사님께서는 찬송가 442장 "황무지가 장미꽃 같이 피는 것을 볼 때에"를 사랑하고 자주 부르셨습니다. <br className="hide-br-768" />
								따라서 "442"는 찬송가 번호에서, "장미"는 청년들의 앞날이 장미밭처럼 아름답게 펼쳐지기를 바라는 마음을 담아 명명되었습니다.
							</p>
						</StorySection>
					</div>
					<Button onClick={openModal}>장미기금 정관 보기</Button>
				</TextContent>
				<Illustration className="hide-tablet-show-mobile">
					<img src={sec01People} alt="기금소개 일러스트" />
				</Illustration>
			</ContentBox>

			<Modal 
				isOpen={isModalOpen} 
				onClose={closeModal} 
				title="442장미기금 정관"
			>
				<CharterImageList>
					{charterImages.map((image, index) => (
						<CharterImageItem key={index}>
							<img src={image} alt={`정관 ${index + 1}페이지`} />
						</CharterImageItem>
					))}
				</CharterImageList>
			</Modal>
		</SectionWrapper>
	);
}

const ContentBox = styled.div<{ $visible: boolean }>`
	max-width: 1400px;
	margin: 0 auto;
	background-color: #F7F2EC;
	border-radius: 20px;
	padding: 5.625rem 5.125rem 3rem 5.125rem;
	${flexColumnCenter}
	gap: 2rem;
	position: relative;
	opacity: ${props => props.$visible ? 1 : 0};
	transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(30px)'};
	transition: opacity 0.6s ease, transform 0.6s ease;
	
	@media (max-width: 1024px) {
		padding: 3rem 2rem;
		max-width: 100%;
	}

	@media (max-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		gap: 1rem;
	}

	@media (max-width: 480px) {
		padding: 2rem 1rem 14rem 1rem;
	}
`;

const TextContent = styled.div`
	flex: 1;
	z-index: 2;
	
	h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: ${colors.secondary};
		margin-bottom: 1rem;
	}
	
	p {
		font-size: 1.2rem;
		color: #000;
		margin-bottom: 1.5rem;
	}
	
	.description {
		
		p {
			font-size: 1rem;
			line-height: 1.6;
			margin-bottom: 2.5rem;
		}

		@media (max-width: 768px) {
			margin-bottom: 1rem;

			p {
				font-size: 0.875rem;
				margin-bottom: 1rem;
				text-align: center;
			}
		}
	}
	
	button {
		display: block;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		p {
			font-size: 0.875rem;
			line-height: 1.4;
			text-align: center;
		}
	}
`;

const Illustration = styled.div`
	flex: 1;
	text-align: center;
	position: absolute;
	top: 2rem;
	right: 6rem;
	z-index: 1;
	
	img {
		max-width: 100%;
		height: auto;
	}
	
	@media (max-width: 1024px) {
		opacity: 0.5;
		top: 0;
		right: 0;
		
		img {
			max-width: 80%;
			max-height: 300px;
		}
	}

	@media (max-width: 768px) {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		right: auto;
		top: auto;
		
		img {
			max-width: 100%;
			max-height: auto;
		}
	}

	@media (max-width: 480px) {
		opacity: 1;
	}
`; 

const TitleWithLogo = styled.h2`
	${flexUnsetEnd}
	gap: 1rem;
	color: ${colors.secondary};
	margin-bottom: 1rem;

	span {
		color: #000;
		font-weight: 600;
		font-size: 1.5rem;
	}
	
	img {
		height: 2rem;
		width: auto;
	}
	
	@media (max-width: 768px) {
		font-size: 1.4rem;
		gap: 0.8rem;
		${flexColumnCenterCenter}

		span {
			font-size: 1rem;
		}		
	}
`; 

const StorySection = styled.div`
	margin: 3.375rem 0 0 0;
	
	h3 {
		font-size: 1.125rem;
		font-weight: 700;
		color: ${colors.secondary};
		width: fit-content;
		margin-bottom: 1rem;
		background-color: #fff;
		padding: 0.8rem 1rem;
		border-radius: 8px;
	}
	
	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		padding-left: 1rem;
	}

	@media (max-width: 768px) {
		margin: 1.5rem 0 0 0;
		${flexColumnCenterCenter}

		h3 {
			font-size: 1rem;
			margin-bottom: 0.5rem;
			padding: 0.5rem 0.75rem;
		}

		p {
			font-size: 0.875rem;
			padding-left: 0rem;
		}
	}
`; 

const CharterImageList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const CharterImageItem = styled.div`
	width: 100%;
	
	img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
		touch-action: manipulation;
		user-select: none;
		-webkit-user-select: none;
		-webkit-touch-callout: none;
	}
	
	@media (max-width: 768px) {
		img {
			min-height: 200px;
			object-fit: contain;
		}
	}
`; 