import { useEffect, useState } from "react";
import { styled } from "styled-components";
import headerLogo from '../img/logo_color.png';
import { flexBetweenCenter, flexCenterCenter } from "../styles/mixins.style";
import { colors } from "../styles/colors";

export default function HomeHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// 스크롤 섹션 감지
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['intro', 'guide', 'application', 'sponsor', 'contact'];
			const scrollPosition = window.scrollY + 200; // 헤더 높이 + 여유 공간

			// 메인비주얼 영역에 있을 때는 activeSection을 빈 문자열로 설정
			if (window.scrollY < 100) {
				setActiveSection("");
				return;
			}

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleLogoClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTimeout(() => {
			window.location.reload();
		}, 500);
	};

	const menuItems = [
		{ id: 'intro', label: '기금소개' },
		{ id: 'guide', label: '기금안내' },
		{ id: 'application', label: '기금신청' },
		{ id: 'sponsor', label: '후원하기' },
		{ id: 'contact', label: '문의하기' }
	];

	return (
		<>
			<HeaderWrapper $scrolled={scrolled}>
				<HeaderNav>
					<LogoSection onClick={handleLogoClick}>
						<img src={headerLogo} alt="로고" />
					</LogoSection>
					<MenuList className="desktop-menu">
						{menuItems.map((item) => (
							<MenuItem key={item.id}>
								<MenuLink 
									onClick={() => scrollToSection(item.id)}
									$active={activeSection === item.id}
								>
									{item.label}
								</MenuLink>
							</MenuItem>
						))}
					</MenuList>
				</HeaderNav>
			</HeaderWrapper>
			
			<MobileBottomNav className="mobile-menu">
				<MobileMenuList>
					{menuItems.map((item) => (
						<MobileMenuItem key={item.id}>
							<MobileMenuLink 
								onClick={() => scrollToSection(item.id)}
								$active={activeSection === item.id}
							>
								{item.label}
							</MobileMenuLink>
						</MobileMenuItem>
					))}
				</MobileMenuList>
			</MobileBottomNav>
		</>
	);
}

const HeaderWrapper = styled.div<{ $scrolled: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	z-index: 1000;
	background: ${({ $scrolled }) => 
		$scrolled 
			? 'rgba(255, 255, 255, 0.30)' 
			: 'transparent'
	};
	backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(4px)' : 'none'};
	transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
	padding: 0 2rem;
	${flexCenterCenter}

	@media (max-width: 1024px) {
		height: 100px;
		padding: 0 1rem;
	}
	@media (max-width: 768px) {
		height: 80px;
		padding: 0 1rem;
	}
	@media (max-width: 480px) {
		height: 60px;
		padding: 0 1rem;
		justify-content: flex-start;
	}
`;

const HeaderNav = styled.nav`
	width: 100%;
	max-width: 1400px;
	height: 100%;
	${flexBetweenCenter}
	
	@media (max-width: 480px) {
		justify-content: center;
	}
`;

const LogoSection = styled.div`
	${flexCenterCenter}
	gap: 0.5rem;
	cursor: pointer;
	
	img {
		height: 2rem;
		
		@media (max-width: 768px) {
			height: 1.125rem;
		}
	}
	
	span {
		font-size: 1rem;
		color: #fff;
		font-weight: 500;
	}
`;

const MenuList = styled.ul`
	${flexCenterCenter}
	gap: 2.5rem;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 1024px) {
		gap: 2rem;
	}
	@media (max-width: 768px) {
		gap: 1rem;
	}
	@media (max-width: 480px) {
		display: none;
	}
`;

const MenuItem = styled.li`
	list-style: none;
`;

const MenuLink = styled.div<{ $active?: boolean }>`
	color: ${({ $active }) => $active ? colors.primary : colors.black};
	font-weight: ${({ $active }) => $active ? '700' : '500'};
	font-size: 1.125rem;
	cursor: pointer;
	transition: color 0.3s ease;
	text-align: center;
	min-width: 78px;

	&:hover {
		color: ${colors.primary};
		font-weight: 700;
	}

	@media (max-width: 1024px) {
		min-width: fit-content;
	}
	@media (max-width: 768px) {
		font-size: 0.875rem;
	}
`;

const MobileBottomNav = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(8px);
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	z-index: 1000;
	display: none;
	
	@media (max-width: 480px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const MobileMenuList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 400px;
	list-style: none;
	margin: 0;
	padding: 0 1rem;
	gap: 0.5rem;
`;

const MobileMenuItem = styled.li`
	list-style: none;
	flex: 1;
`;

const MobileMenuLink = styled.div<{ $active?: boolean }>`
	color: ${({ $active }) => $active ? colors.primary : colors.black};
	font-weight: ${({ $active }) => $active ? '700' : '500'};
	font-size: 0.875rem;
	cursor: pointer;
	transition: color 0.3s ease;
	text-align: center;

	&:hover {
		color: ${colors.primary};
		font-weight: 700;
	}
`;