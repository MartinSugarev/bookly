import './libraryPage.css';
import React, {memo, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import LibraryLayOut from '../LibraryLayOut/LibraryLayOut';
import Book from '../Book/Book';
import {books} from '../../onBoard-data'
 
const LibraryPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [foundedBooks, setFoundedBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       if(inputValue !== ''){
           const found = books.filter(b => b.author.toLowerCase().includes(inputValue.toLowerCase()) || b.heading.toLowerCase().includes(inputValue.toLowerCase()))
           setFoundedBooks(() => found)
         } 
    }, [inputValue])

    const handleChange = (e) => {
      setInputValue(() => e.target.value)
    }

    const handleBookClick = (image, heading, author) => {
        navigate('/player', {state: {image, heading, author}})
    }

    return (
        <LibraryLayOut>
            <div className="libraryPage-magnifier-container">
                <img src="/Logo Small.svg" alt="magnifier"/>
                <h6>bookly</h6>
            </div>
            <div className="libraryPage-input-field">
                <h5>my books</h5>
                <input onChange={(e) => handleChange(e)} type="text" placeholder="Search Books or Author..."/>
            </div>
            <div className="libraryPage-books-container">
               {inputValue ? foundedBooks.map((book, index) => {
                return <Book key={index} handleClick={handleBookClick} image={book.image} heading={book.heading} author={book.author} />
            }) : books.map((book, index) => {
                   return <Book key={index} handleClick={handleBookClick} image={book.image} heading={book.heading} author={book.author} />
               })}
            </div>
        </LibraryLayOut>
    )
}

export default memo(LibraryPage)
