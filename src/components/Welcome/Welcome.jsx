import './welcome.css';
import React, {memo} from 'react';
import MainLayout from '../MainLayout/MainLayout';
import Button from '../Button/Button'

const Welcome = () => {
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
                  <Button text={"Personalize Your Account"}/>
                  <Button text={"Skip"} color={"dark"}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default memo(Welcome)
