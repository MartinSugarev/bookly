import './option.css';
import React, {memo, useRef} from 'react'

const Option = ({text, handleOptionClick}) => {
 
    const ref = useRef()


    return (
        <div ref={ref} onClick={() => handleOptionClick(ref.current.textContent, ref)} className="option-container">
            {text}
        </div>
    )
}

export default memo(Option)
