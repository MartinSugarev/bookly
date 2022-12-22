import './carouselContent.css';
import React, {memo} from 'react'

const CarouselContent = ({img, tittle, text}) => {
    return (
        <div className="carouselContent-container">
            <img src={img} alt="img" />
               <h5>{tittle}</h5>
                <p>{text}</p>
        </div>
    )
}

export default memo(CarouselContent)

