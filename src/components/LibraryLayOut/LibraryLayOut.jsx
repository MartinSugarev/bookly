import './libraryLayOut.css'
import React, {memo} from 'react'

const LibraryLayOut = ({children}) => {
    return (
        <div className="libraryLayOut-container">
            {children}
        </div>
    )
}

export default memo(LibraryLayOut)
