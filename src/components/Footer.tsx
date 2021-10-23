import React from "react";

interface LinkProps {
    name: string;
    url: string;
}

const Link = (props: LinkProps) => {
    return (
        <React.Fragment >
            <a href={props.url}>{props.name}</a>
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

    return (
        <div>
            {links.map(link => (
                <Link key={link.name} name={link.name} url={link.url}></Link>
            ))}
        </div>
    );
}