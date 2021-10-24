import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu';
import Slideshow from '../components/Slideshow';
import Section from '../components/Section';
import desktopBg from '../images/DesktopBG_Image.jpeg';
import carrersBg from '../images/careers-1.jpeg';
import './Home.css';

export default function Home() {
    return(
        <div>
            <Menu/>
            <Slideshow/>
            <Gallery/>
            <Section backgroundImage={desktopBg}/>
            <Section backgroundImage={carrersBg}/>
            <Footer/>
        </div>
    );
}