import './finish.css';
import React, {memo} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Button from '../Button/Button';

const Finish = () => {

    const navigate = useNavigate()

    const handleSubmitClick = () => {
        navigate('/library')
    }

    return (
        <MainLayout>
            <div className="finish-container">
                <div className="finish-image-container">
                    <img src='/fourth.svg' alt='image' />
                </div>
                <h3>You are ready to go!</h3>
                <p>Congratulation, any interesting topics will be shortly in your hands.</p>
                <div className="finish-button-container">
                   <Button handleClick={handleSubmitClick} text={'Finish'} />
                </div>
            </div>
        </MainLayout>
    )
}

export default memo(Finish)
