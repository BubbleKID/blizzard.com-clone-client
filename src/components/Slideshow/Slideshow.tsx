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
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [shiftClassName, setShiftClassName] = useState<string>('shift-left-fade-in');
    const ref = useRef<HTMLButtonElement>(null);

    const onClickSlideControlBtn = (type: string): void => {
        let newIndex;
      
        ref.current?.classList.remove('shift-left-fade-in');
        void ref.current?.offsetWidth;
        if(type === 'prev') {
            setShiftClassName('shift-left-fade-in');
            void ref.current?.offsetWidth;
            if(currentSlideIndex === 0) {
                newIndex = props.slides.length - 1;
            } else {
                newIndex = currentSlideIndex - 1;
            }
        } else {
            setShiftClassName('shift-left-fade-in');
            void ref.current?.offsetWidth;
            if(currentSlideIndex === props.slides.length - 1) {
                newIndex = 0;
            } else {
                newIndex = currentSlideIndex + 1;
            }
        }
        setCurrentSlideIndex(newIndex);
        
    }
    const isPlay = false;

    useEffect(
        () => {
          if (running) {
            const interval = setInterval(() => {
                console.log(seconds)
                if(seconds > 0) {
                    setSeconds(seconds -= 1);
                } else {
                  clearInterval(interval);
                }
            }, 1000);
            return () => {
                setSeconds(3);
                clearInterval(interval);
            }
          }
        },
        [running]
    );
    
    return (
        <React.Fragment>
            <div 
                className='slide-container'
                onMouseEnter={() => {setSlideControlButtonOpacity(1); setRunning(false) }}
                onMouseLeave={() => {setSlideControlButtonOpacity(0); setRunning(true) }}
            >
                <div className='slide-background' style={{ backgroundImage: `url(${props.slides[currentSlideIndex] .backgroundImage})`, backgroundColor: props.slides[currentSlideIndex].backgroundColor}}>
                    <div className="gradient-container"></div>
                </div>
                    <div className='slide-content'>                
                        <img className='slide-icon' width={props.slides[currentSlideIndex] .iconWidth} src={props.slides[currentSlideIndex] .icon}/>
                        <span className='slide-title'>{props.slides[currentSlideIndex].title}</span>
                        <button ref={ref} className={'slide-btn ' + shiftClassName} type='button'>{props.slides[currentSlideIndex].btnTest}</button>
                    </div>
                    <button className="slide-control-btn prev" style={{opacity: slideControlButtonOpacity}} onClick={() => onClickSlideControlBtn('prev')}><PreBtn/></button>
                    <button className="slide-control-btn next" style={{opacity: slideControlButtonOpacity}} onClick={() => onClickSlideControlBtn('next')}><NexBtn/></button>
            </div>
            <div className='slider'>
                { 
                    props.slides.map((slide, index) => 
                        <div key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={(index === currentSlideIndex) ? 'slider-item active':'slider-item'}
                        >
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}