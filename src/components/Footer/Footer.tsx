import React from "react";
import LanguageSelector from './../LanguageSelector';
import './Footer.css';
import { ReactComponent as BNetIcon } from '../../images/Blizzard Entertainment-16.svg';

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
        <div className="footer-container"  style={{margin: '100px 0'}}>
            <div className="languague"></div>
            <div className="logo"></div>
            <div>
                {links.map(link => (
                    <Link key={link.name} name={link.name} url={link.url} fontSize={17}></Link>
                ))}
            </div>
            <div style={{fontSize: '16px', margin: '40px 0'}}>
                <p>All games, one app: <BNetIcon className="navbar-icon"/><a className="navbar-app">Battle.net Desktop App</a></p>
            </div>
            <p style={{fontSize: '13px', margin: '0'}}>©2021 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.</p>
            <p style={{fontSize: '13px', margin: '0'}}>All <a href="#" style={{fontWeight: 'bold'}}>trademarks</a> referenced herein are the properties of their respective owners.</p>
            <div>
                {smallLinks.map(link => (
                    <Link key={link.name} name={link.name} url={link.url} fontSize={13}></Link>
                ))}
            </div>
        </div>
    );
}