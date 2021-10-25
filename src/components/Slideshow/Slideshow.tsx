import React, { useState } from 'react';
import './Slideshow.css';

interface Props {
    slides: Slide[]
}

interface Slide {
    icon: string,
    iconWidth: number,
    title: string,
    btnTest: string,
    backgroundImage: string,
    backgroundColor: string
}

export default function Slideshow(props: Props) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    return (
        <React.Fragment>
            <div className='slide-container' style={{ backgroundImage: `url(${props.slides[currentSlideIndex] .backgroundImage})`, backgroundColor: props.slides[currentSlideIndex].backgroundColor}}>
                <div className='slide-content'>                
                    <img className='slide-icon' width={props.slides[currentSlideIndex] .iconWidth} src={props.slides[currentSlideIndex] .icon}/>
                    <span className='slide-title'>{props.slides[currentSlideIndex] .title}</span>
                    <button className='slide-btn' type='button'>{props.slides[currentSlideIndex] .btnTest}</button>
                </div>
            </div>
            <div className='slider'>
                { props.slides.map((slide, index) => <div key={index} onClick={() => setCurrentSlideIndex(index)} className={(index === currentSlideIndex) ? 'slider-item active':'slider-item'}></div>) }
            </div>
        </React.Fragment>
    )
}