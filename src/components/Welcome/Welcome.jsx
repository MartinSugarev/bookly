import './welcome.css';
import React, {memo} from 'react';
import {useNavigate} from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout';
import Button from '../Button/Button'

const Welcome = () => {


    const navigate = useNavigate()  


    const handlePersonalizeClick = () => {
       navigate('/preferences')
    }
    const handleSkipClick = () => {
        navigate('/library')
      }

    return (
        <MainLayout>
            <div className="welcome-container">
                <div className="welcome-text-info">
                    <h6>welcome</h6>
                    <h2>Find what</h2> 
                    <h2>you are </h2>
                    <h2>looking for</h2>
                    <p>By personalize your account, we can help you to find what you like.</p>
                </div>
                <div className="welcome-button-container">
                  <Button handleClick={handlePersonalizeClick} text={"Personalize Your Account"}/>
                  <Button handleClick={handleSkipClick} text={"Skip"} color={"dark"}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default memo(Welcome)
