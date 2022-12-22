import './button.css';
import React, {memo} from 'react'

const Button = ({text, handleClick = '', color}) => {
    return (
        <button onClick={handleClick} className={color === 'dark' ? 'button dark': 'button light'}>
            {text}
        </button>
    )
}

export default memo(Button)