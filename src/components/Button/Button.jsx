import './button.css';
import React, {memo} from 'react'

const Button = ({text, handleClick, color, active = true}) => {
    return (
        <button onClick={handleClick} className={color === 'dark' ? 'button dark': 'button light'} disabled={active ? false : true}>
            {text}
        </button>
    )
}

export default memo(Button)