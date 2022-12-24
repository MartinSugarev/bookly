import './player.css'
import React, {memo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import LibraryLayOut from '../LibraryLayOut/LibraryLayOut';

const Player = () => {

   const location = useLocation()
   const navigate = useNavigate();

   const handleBackClick = () => {
       navigate('/library')
   }

    return (
        <LibraryLayOut>
            <div className="player-header-container">
                <img onClick={handleBackClick} style={{cursor: 'pointer'}} src='/Arrow - Left 2.svg' alt='arrow-left' />
                <h5>{location.state.heading}</h5>
                <p>...</p>
            </div>
            <div className="player-image-container">
               <img src={location.state.image} alt="image-placeholder" /> 
               <h5>{location.state.heading}</h5>
               <p>{location.state.author}</p>
            </div>
            <div className="player-line-container">
                <img src="Line Container.svg" alt="line-container"/>
                <img src="Line Progress.svg" alt="line-progress"/>
                <div className="player-duration">
                   <p>02.15</p> 
                   <p>47.32</p> 
                </div>
                <img src="/Play.svg" alt="play-icon"/>
            </div>
        </LibraryLayOut>
    )
}

export default memo(Player)
