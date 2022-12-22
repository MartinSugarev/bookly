import './onBoarding.css';
import React, {memo, useEffect, useState} from 'react';
import MainLayout from '../MainLayout/MainLayout';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import Dots from '../Dots/Dots';
import CarouselContent from '../CarouselContent/CarouselContent';
import {data} from '../../onBoard-data'
 
const OnBoarding = () => {

   const [endOfScroll, setEndOfScroll] = useState(false)
     
   
    useEffect(() => {   
   const allSlides = document.querySelectorAll('.carouselContent-container')
   const allDots = document.querySelectorAll('.dots')
   allDots[0].classList.add('active-dot')
   allSlides[0].classList.add('active')

    }, [])


    const handleNextClick = () => {
     const activeSlideWidth =  document.querySelector('.carouselContent-container.active').getBoundingClientRect().width;
     const allDots = document.querySelectorAll('.dots')
     const activeDot = document.querySelector('.dots.active-dot');
     const slider = document.querySelector('.onboarding-slider')
     if(activeDot.nextSibling === null){
        return
     } 
     activeDot.nextSibling.classList.add('active-dot');
     activeDot.classList.remove('active-dot');
     slider.scrollTo({
        top: 0,
        left: `${slider.scrollLeft + activeSlideWidth}`,
        behavior: "smooth"
     })  
     if(allDots[allDots.length - 1].classList.contains('active-dot')){
        setEndOfScroll(true)
     }
    }




    return (
       <MainLayout>
           <div className="onboarding-container">
              <div className="onboarding-slider">
                {data.map((d, index) => {
                   return <CarouselContent key={index} img={d["image"]} text={d['text']} tittle={d['tittle']}/>
                })}
              </div>
               <Carousel>
                  <Dots />
                  <Dots />
                  <Dots />
               </Carousel>
              { endOfScroll ? <div className="onboarding-button-container">
                 <Button text={'Lets Get Started'} color={'light'} />
              </div>
                : <div className="onboarding-button-container">
                 <Button text={"Skip"} color={'dark'}/>
                 <Button handleClick={handleNextClick} text={"Next"} color={'light'}/>
              </div>}
           </div>
       </MainLayout>
    )
}

export default memo(OnBoarding)
