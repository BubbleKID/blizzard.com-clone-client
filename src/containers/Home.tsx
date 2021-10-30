import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Slideshow from '../components/Slideshow/Slideshow';
import Section from '../components/Section/Section';
import desktopBg from '../images/DesktopBG_Image.jpeg';
import carrersBg from '../images/careers-1.jpeg';
import './Home.css';
import backgroundImageTbc from '../images/wow-bcc-overlords-banner-desktop-2500x514.jpeg';
import backgroundImageD2 from '../images/D2R_2021_Blizzard.comDesktop_2500x514_MB01.png';
import backgroundImageOW from '../images/OW_2021_HalloweenTerror_BlizzardHomepage-Desktop_2500x514_JP.jpeg';
import tbcIcon from '../images/icons/WOW_Classic_Phase_2p5p2_Logo_01.png';
import d2Icon from '../images/icons/D2R_DiabloResurrected_Logo_blizz.png';
import owIcon from '../images/icons/OW_2021_HalloweenTerror_Logo-Only_enUS.png';
import { ReactComponent as SectionIcon1 } from '../images/Blizzard Entertainment-12.svg';
import { ReactComponent as SectionIcon2 } from '../images/Blizzard Entertainment-13.svg';
import { ReactComponent as SectionIcon3 } from '../images/Blizzard Entertainment-14.svg';
import { ReactComponent as SectionIcon4 } from '../images/Blizzard Entertainment-15.svg';
import { ReactComponent as BNetIcon } from '../images/Blizzard Entertainment-16.svg';
import appImage from '../images/enus.jpeg';

const slides = [
    {
        icon: tbcIcon,
        iconWidth: 260,
        btnTest: 'Play Today',
        title: 'Illidan\'s lieutenants\nAwait',
        backgroundImage: backgroundImageTbc,
        backgroundColor: 'rgb(30, 3, 8)'
    },
    {
        icon: d2Icon,
        iconWidth: 260,
        btnTest: 'Buy Now',
        title: 'Evil Is Resurrected',
        backgroundImage: backgroundImageD2,
        backgroundColor: 'rgb(0, 0, 0)'
    },
    {
        icon: owIcon,
        iconWidth: 260,
        btnTest: 'Buy Now',
        title: 'Buy 50 Loot Boxes\nAnd Get 10 Bonus!',
        backgroundImage: backgroundImageOW,
        backgroundColor: 'rgb(35, 38, 51)'
    }
]
export default function Home() {
    return(
        <div>
            <Menu/>
            <Slideshow slides={slides}/>
            <Gallery/>
            <Section height='450px' backgroundImages={[desktopBg]}>
                <div className="section-wrapper">
                    <div className="section-content">
                        <p style={{fontSize: '2.75rem', fontWeight: 500, margin: 0, padding: 0, color: '#fff'}}>Download Battle.net</p>
                        <div className="section-title-container">
                            <SectionIcon1 className="section-icon"/>
                            <p className="section-title">Your games in one place</p>
                        </div>
                        <div className="section-title-container">
                            <SectionIcon2 className="section-icon"/>
                            <p className="section-title">Connect with friends</p>
                        </div>
                        <div className="section-title-container">
                            <SectionIcon3 className="section-icon"/>
                            <p className="section-title">Shop for digital games and goodies</p>
                        </div>
                        <div>
                            <button className="section-btn section-title-container">
                                <p style={{margin: 0, color: '#fff'}}>Download for Windows</p>
                                <SectionIcon4 className="section-icon section-icon-inside-btn"/>
                            </button>
                            <button className="section-btn transparent-btn">Learn More</button>
                        </div>
                        <p>Also available as a <a href="#" className="mobile-link">mobile app</a></p>
                    </div>
                    <div className="section-icon-large-container">
                        <BNetIcon className="section-icon-large" style={{fill: '#148eff'}}/>
                    </div>
                    <div className="section-image-container">
                        <img src={appImage}></img>
                    </div>
                </div>
            </Section>
            <Section height='412px' backgroundImages={[carrersBg]}>
                <div className="section-wrapper">
                    <div className="section-content">
                        <p style={{fontSize: '2.75rem', fontWeight: 500, margin: 0, padding: 0, color: '#fff'}}>Create worlds</p>
                        <p style={{fontSize: '1.5rem', fontWeight: 400,  margin: 0, padding: 0}}>Learn more about Careers at Blizzard</p>
                        <button className="section-btn">Explore Careers</button>
                    </div>
                </div>
            </Section>
            <Footer/>
        </div>
    );
}