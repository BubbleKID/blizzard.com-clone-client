import React from 'react';
import './Slideshow.css';

interface Props {
    icon: string,
    iconWidth: number,
    title: string,
    btnTest: string,
    backgroundImage: string
}

export default function Slideshow(props: Props) {
    return (
        <React.Fragment>
            <div className='slide-container'>
                <div className='slide-content' style={{ backgroundImage: `url(${props.backgroundImage})`}}>                <img className='slide-icon' width={props.iconWidth} src={props.icon}/>
                    <span className='slide-title'>{props.title}</span>
                    <button className='slide-btn' type='button'>{props.btnTest}</button>
                </div>
            </div>
            <div className='slider'></div>
        </React.Fragment>
    )
}