import React from 'react';
import './Section.css';

interface Props {
    children: any
    height: string
    backgroundImages: string[]
}

export default function Section(props: Props) {
    return(
        <div className="section-container" style={{ height: props.height, backgroundImage: `url(${props.backgroundImages[0]})`}}>
            {props.children}
        </div>
    )
}