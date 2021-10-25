import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Slideshow from '../components/Slideshow/Slideshow';
import Section from '../components/Section';
import desktopBg from '../images/DesktopBG_Image.jpeg';
import carrersBg from '../images/careers-1.jpeg';
import './Home.css';
import backgroundImage from '../images/wow-bcc-overlords-banner-desktop-2500x514.jpeg';
import tbcIcon from '../images/icons/WOW_Classic_Phase_2p5p2_Logo_01.png';

export default function Home() {
    return(
        <div>
            <Menu/>
            <Slideshow icon={tbcIcon} iconWidth={295} btnTest={'Play Today'} title={"Illidan\'s lieutenants\nAwait "} backgroundImage={backgroundImage}/>
            <Gallery/>
            <Section backgroundImage={desktopBg}/>
            <Section backgroundImage={carrersBg}/>
            <Footer/>
        </div>
    );
}