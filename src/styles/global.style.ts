import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
    
    :root {
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-white: ${colors.white};
        --color-black: ${colors.black};
    }
    
	* { font-size: inherit; box-sizing: border-box;}

	body {
		color: #fff;
		font-size: 16px;
		font-family: 'Pretendard', 'TJJoyofsinging', Arial, sans-serif !important;
		margin: 0;
	}
	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}
	a:hover {
		text-decoration: none;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
		padding: 0;
	}
	.font-pretendard {
    	font-family: 'Pretendard', Arial, sans-serif !important;
	}
	.font-tj-joy {
		font-family: 'TJJoyofsinging', 'Pretendard', Arial, sans-serif !important;
	}

	/* 반응형 */
	.hiddenTablet {display: block !important;}
	.hidden1024 {display: block !important;}
	.hidden1024-flex {display: flex !important;}
	.hiddenInline1024 {display: inline-block !important;}
	.showTablet {display: none !important;}
	.show1024 {display: none !important;}
	.showMobile {display: none !important;}
	.showMobile-flex {display: none !important;}

	/* 모바일 줄바꿈용 */
	.mobile-br { display: none; }

	@media (max-width: 1024px) {
		.hidden1024, .hidden1024-flex {display: none !important;}
	}
	@media (max-width: 768px) {
		.mobile-br { display: inline; }
	}

	.hide-mobile { display: inline; }
	@media (max-width: 768px) {
		.hide-mobile { display: none; }
	}

	.hide-tablet-show-mobile { display: flex; }
	@media (max-width: 768px) {
		.hide-tablet-show-mobile { display: none; }
	}
	@media (max-width: 480px) {
		.hide-tablet-show-mobile { display: flex; }
	}
`;

export default GlobalStyle;