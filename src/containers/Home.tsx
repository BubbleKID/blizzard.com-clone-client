import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Slideshow from '../components/Slideshow/Slideshow';
import Section from '../components/Section';
import desktopBg from '../images/DesktopBG_Image.jpeg';
import carrersBg from '../images/careers-1.jpeg';
import './Home.css';
import backgroundImageTbc from '../images/wow-bcc-overlords-banner-desktop-2500x514.jpeg';
import backgroundImageD2 from '../images/D2R_2021_Blizzard.comDesktop_2500x514_MB01.png';
import backgroundImageOW from '../images/OW_2021_HalloweenTerror_BlizzardHomepage-Desktop_2500x514_JP.jpeg';
import tbcIcon from '../images/icons/WOW_Classic_Phase_2p5p2_Logo_01.png';
import d2Icon from '../images/icons/D2R_DiabloResurrected_Logo_blizz.png';
import owIcon from '../images/icons/OW_2021_HalloweenTerror_Logo-Only_enUS.png';

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
            <Section backgroundImage={desktopBg}/>
            <Section backgroundImage={carrersBg}/>
            <Footer/>
        </div>
    );
}