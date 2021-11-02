import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Slideshow from './Slideshow';
import tbcIcon from '../../images/icons/WOW_Classic_Phase_2p5p2_Logo_01.png';
import d2Icon from '../../images/icons/D2R_DiabloResurrected_Logo_blizz.png';
import backgroundImageTbc from '../../images/wow-bcc-overlords-banner-desktop-2500x514.jpeg';
import backgroundImageD2 from '../../images/D2R_2021_Blizzard.comDesktop_2500x514_MB01.png';

test('Slideshow should be rendered', () => {
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
        }
    ];
    const component = TestRenderer.create(<Slideshow slides={slides}/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
