import React, { useState }from 'react';
import { shallow, mount } from 'enzyme';
import TestRenderer  from 'react-test-renderer';
import Slideshow from './Slideshow';
import tbcIcon from '../../images/icons/WOW_Classic_Phase_2p5p2_Logo_01.png';
import d2Icon from '../../images/icons/D2R_DiabloResurrected_Logo_blizz.png';
import owIcon from '../images/icons/OW_2021_HalloweenTerror_Logo-Only_enUS.png';
import backgroundImageTbc from '../../images/wow-bcc-overlords-banner-desktop-2500x514.jpeg';
import backgroundImageD2 from '../../images/D2R_2021_Blizzard.comDesktop_2500x514_MB01.png';
import backgroundImageOW from '../images/OW_2021_HalloweenTerror_BlizzardHomepage-Desktop_2500x514_JP.jpeg';
import renderer from 'react-test-renderer';

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
];

test('Slideshow should be rendered', () => {
    const component = TestRenderer.create(<Slideshow slides={slides}/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('click prev button', () => {
    const wrapper = mount(<Slideshow slides={slides} />);
    wrapper.find('.prev').simulate('click');
    let btnTest = wrapper.find('.slide-title').text();
    expect(btnTest).toEqual(slides[2].title);
});

test('click next button', () => {
    const wrapper = mount(<Slideshow slides={slides} />);
    wrapper.find('.next').simulate('click');
    let btnTest = wrapper.find('.slide-title').text();
    expect(btnTest).toEqual(slides[1].title);
});
