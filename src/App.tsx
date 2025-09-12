import HomeHeader from './components/HomeHeader';
import MainVisual from './components/MainVisual';
import GlobalStyle from "./styles/global.style";
import FundIntroSection from './components/sections/FundIntroSection';
import FundGuideSection from './components/sections/FundGuideSection';
import FundApplicationSection from './components/sections/FundApplicationSection';
import SponsorSection from './components/sections/SponsorSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
import MailSpinner from './components/common/MailSpinner';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomeHeader />
      <MainVisual />
      <FundIntroSection />
      <FundGuideSection />
      <FundApplicationSection />
      <SponsorSection />
      <ContactSection />
      <Footer />
      <FloatingMenu />
      <MailSpinner />
    </div>
  );
}

export default App;
