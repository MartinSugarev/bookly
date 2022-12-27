import './personalize.css';
import React, {memo, useEffect, useState}from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Option from '../Option/Option';
import Button from '../Button/Button';
import {options} from '../../onBoard-data'

const Personalize = () => {

   const [selectedItems, setSelectedItems] = useState(0);
   const [selectedOptions, setSelectedOptions] = useState([])
   const navigate = useNavigate()

   useEffect(() => {  
     return localStorage.removeItem('options1')
   }, [selectedOptions])

    const handleOptionClick = (text, ref) => {
      const indexOfOption = selectedOptions.indexOf(text)
      if(indexOfOption < 0){
          setSelectedOptions(prev => [...prev, text])
          ref.current.style.background = '#4838D1';
          setSelectedItems(prev => prev + 1)
          return
        }
       const copyOfSelectedOptions = selectedOptions 
       copyOfSelectedOptions.splice(indexOfOption, 1)
       setSelectedOptions(copyOfSelectedOptions)
      ref.current.style.background = 'transparent';
      setSelectedItems(prev => prev - 1)
    }

    const handleSubmitClick = () => {
       if(selectedOptions.length < 3){
         alert('You should select at least 3 topics')
         return
       }
        localStorage.setItem('savedOptions', JSON.stringify(selectedOptions))
        navigate('/ready')
    }

    const handleSkipClick = () => {
      navigate('/library')
    }

    return (
        <MainLayout>
          <div className="personalize-container">
            <div className="personalize-text-container">
                <h2>Personalize Suggestion</h2>
                <p>Choose<b> min. 3 topics</b> you like, we will give you more often that relate to it.</p>
            </div>
            <input type="text" placeholder="Placeholder" />
            <div className="personalize-options-container">
               {options.map((opt, index) => {
                   return <Option handleOptionClick={handleOptionClick} key={index} text={opt} />
               })}
            </div>
            <p>{`${selectedItems} topics Selected`}</p>
            <div className="personalize-button-container">
                <Button text={'Submit'} handleClick={handleSubmitClick}/>
                <Button handleClick={handleSkipClick} text={'Skip'} color={'dark'}/>
            </div>
          </div>           
        </MainLayout>
    )
}

export default memo(Personalize)
