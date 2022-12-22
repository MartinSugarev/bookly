import './personalize.css';
import React, {memo}from 'react';
import MainLayout from '../MainLayout/MainLayout';
import Option from '../Option/Option';
import Button from '../Button/Button';
import {options} from '../../onBoard-data'

const Personalize = () => {
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
                   return <Option key={index} text={opt} />
               })}
            </div>
            <p>3 topics Selected</p>
            <div className="personalize-button-container">
                <Button text={'Submit'}/>
                <Button text={'Skip'} color={'dark'}/>
            </div>
          </div>           
        </MainLayout>
    )
}

export default memo(Personalize)
