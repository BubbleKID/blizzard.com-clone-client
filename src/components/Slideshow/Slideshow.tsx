import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css';
import  { ReactComponent as PreBtn } from '../../images/Blizzard Entertainment-10.svg';
import  { ReactComponent as NexBtn } from '../../images/Blizzard Entertainment-11.svg';

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
    const [running, setRunning] = useState(false);
    let [seconds, setSeconds] = useState<number>(3);
    const [slideControlButtonOpacity, setSlideControlButtonOpacity] = useState<number>(0);
    let [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const btnRef = useRef<HTMLButtonElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLSpanElement>(null);

    const onClickSlideControlBtn = (type: string): void => {
        let newIndex;

        if(type === 'prev') {
            startNewAnimation(slideRef, 'slide-shift-right');
            startNewAnimation(btnRef, 'shift-right-fade-in');
            startNewAnimation(logoRef, 'shift-right-fade-in');
            startNewAnimation(titleRef, 'shift-right-fade-in');
            if(currentSlideIndex === 0) {
                newIndex = props.slides.length - 1;
            } else {
                newIndex = currentSlideIndex - 1;
            }
        } else {
            startNewAnimation(slideRef, 'slide-shift-left');
            startNewAnimation(btnRef, 'shift-left-fade-in');
            startNewAnimation(logoRef, 'shift-left-fade-in');
            startNewAnimation(titleRef, 'shift-left-fade-in');
            if(currentSlideIndex === props.slides.length - 1) {
                newIndex = 0;
            } else {
                newIndex = currentSlideIndex + 1;
            }
        }
        setCurrentSlideIndex(newIndex);
    }

    const startNewAnimation = (ref: any, newClass: string) => {
        ref.current?.classList.forEach((className: string) => {
            if(className.includes('shift')) {
                ref.current?.classList.remove(className);
            }
        })
        ref.current?.offsetWidth;
        ref.current?.classList.add(newClass);
    }
    let isPlay = false;

    // useEffect(
    //     () => {
    //       if (running) {
    //         const interval = setInterval(() => {
    //             console.log(seconds)
    //             if(seconds > 0) {
    //                 setSeconds(seconds -= 1);
    //             } else {
    //               // setCurrentSlideIndex(currentSlideIndex += 1);
    //               clearInterval(interval);
    //               setSeconds(3);
    //               isPlay = true
    //             }
    //         }, 1000);
    //         return () => {
    //             setSeconds(3);
    //             clearInterval(interval);
    //             isPlay = false
    //         }
    //       }
    //     },
    //     [running]
    // );
    
    return (
        <React.Fragment>
            <div 
                className='slide-container'
                // onMouseEnter={() => {setSlideControlButtonOpacity(1); setRunning(false) }}
                // onMouseLeave={() => {setSlideControlButtonOpacity(0); setRunning(true) }}
                style={{backgroundColor: props.slides[currentSlideIndex].backgroundColor}}
            >
                <div ref={slideRef} className='slide-background slide-shift-left' style={{ backgroundImage: `url(${props.slides[currentSlideIndex].backgroundImage})`, backgroundColor: props.slides[currentSlideIndex].backgroundColor}}>
                    <div className="gradient-container"></div>
                </div>
                    <div className='slide-content'>                
                        <img ref={logoRef} className='slide-icon shift-left-fade-in' width={props.slides[currentSlideIndex] .iconWidth} src={props.slides[currentSlideIndex].icon}/>
                        <span ref={titleRef} className='slide-title shift-left-fade-in'>{props.slides[currentSlideIndex].title}</span>
                        <button ref={btnRef} className='slide-btn shift-left-fade-in' type='button'>{props.slides[currentSlideIndex].btnTest}</button>
                    </div>
                    <button className="slide-control-btn prev" style={{opacity: slideControlButtonOpacity}} onClick={() => onClickSlideControlBtn('prev')}><PreBtn/></button>
                    <button className="slide-control-btn next" style={{opacity: slideControlButtonOpacity}} onClick={() => onClickSlideControlBtn('next')}><NexBtn/></button>
            </div>
            <div className='slider'>
                { 
                    props.slides.map((slide, index) => 
                        <div key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={index === currentSlideIndex ? 'slider-item active':'slider-item'}
                        >
                            { index === currentSlideIndex && isPlay ? ( <div className='play'></div>) : null }
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}