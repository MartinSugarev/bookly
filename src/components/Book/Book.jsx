import './book.css';
import React, {memo} from 'react'

const Book = ({handleClick ,image, heading, author}) => {
    return (
        <div onClick={() => handleClick(image, heading, author)} className="book-container">
            <div className="book-image-container">
                <img src={image} alt="book-img"/>
            </div>
            <div className="book-text-container">
                <p>{heading}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default memo(Book)
