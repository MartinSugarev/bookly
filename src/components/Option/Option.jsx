import './option.css';
import React, {memo} from 'react'

const Option = ({text}) => {
    return (
        <div className="option-container">
            {text}
        </div>
    )
}

export default memo(Option)
