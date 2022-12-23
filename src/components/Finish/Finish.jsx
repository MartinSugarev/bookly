import './finish.css';
import React, {memo} from 'react';
import MainLayout from '../MainLayout/MainLayout';
import Button from '../Button/Button'

const Finish = () => {
    return (
        <MainLayout>
            <div className="finish-container">
                <div className="finish-image-container">
                    <img src='/fourth.svg' alt='image' />
                </div>
                <h3>You are ready to go!</h3>
                <p>Congratulation, any interesting topics will be shortly in your hands.</p>
                <div className="finish-button-container">
                   <Button text={'Finish'} />
                </div>
            </div>
        </MainLayout>
    )
}

export default memo(Finish)
