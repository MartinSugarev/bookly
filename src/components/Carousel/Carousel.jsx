import './carousel.css';
import React, {memo} from 'react';


const Carousel = ({children}) => {
    return (
        <div className="carousel">
            {children}
        </div>
    )
}


export default memo(Carousel)
