import React from "react";
import LanguageSelector from './LanguageSelector';
import './Footer.css';

interface LinkProps {
    name: string;
    url: string;
    fontSize: number;
}

const Link = (props: LinkProps) => {
    return (
        <React.Fragment >
            <a style={{fontSize: props.fontSize}} className="links" href={props.url}>{props.name}</a>
        </React.Fragment>
    );
};

export default function Footer() {
    const links = [
        { name: 'Careers', url: '#'},
        { name: 'About', url: '#'},
        { name: 'Support', url: '#'},
        { name: 'Contact Us', url: '#'},
        { name: 'Press', url: '#'},
        { name: 'API', url: '#'},
        { name: 'Site Map', url: '#'}
    ];

    const smallLinks = [
        { name: 'Privacy', url: '#'},
        { name: 'Legal', url: '#'},
        { name: 'Terms', url: '#'},
        { name: 'Cookie Policy', url: '#'},
        { name: 'Cookie Setting', url: '#'}
    ];

    return (
        <div className="footer-container">
            <div className="languague"></div>
            <div className="logo"></div>
            <div>
                {links.map(link => (
                    <Link key={link.name} name={link.name} url={link.url} fontSize={17}></Link>
                ))}
            </div>
            <p style={{fontSize: '16px'}}>All games, one app:Battle.net Desktop App</p>
            <p style={{fontSize: '13px'}}>©2021 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.</p>
            <p style={{fontSize: '13px'}}>All <a href="#" style={{fontWeight: 'bold'}}>trademarks</a> referenced herein are the properties of their respective owners.</p>
            <div>
                {smallLinks.map(link => (
                    <Link key={link.name} name={link.name} url={link.url} fontSize={13}></Link>
                ))}
            </div>
        </div>
    );
}