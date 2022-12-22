import './mainLayout.css';

import React, {memo} from 'react'

const MainLayout = ({children}) => {
    return (
        <main className="mainLayout-background">
            {children}
            {/* <img src="/Home Indicator.svg" alt="home" /> */}
        </main>
    )
}


export default memo(MainLayout)
