import React from "react";

interface LinkProps {
    name: string;
    url: string;
    fontSize: number;
}

const Link = (props: LinkProps) => {
    return (
        <React.Fragment >
            <a style={{textTransform: "uppercase", fontSize: props.fontSize}} href={props.url}>{props.name}</a>
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
        <div>
            {links.map(link => (
                <Link key={link.name} name={link.name} url={link.url} fontSize={14}></Link>
            ))}
            <p>All games, one app:Battle.net Desktop App</p>
            <p>©2021 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.</p>
            <p>All trademarks referenced herein are the properties of their respective owners.</p>
            {smallLinks.map(link => (
                <Link key={link.name} name={link.name} url={link.url} fontSize={12}></Link>
            ))}
        </div>
    );
}