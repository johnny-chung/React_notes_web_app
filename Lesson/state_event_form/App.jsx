import React, { useState } from 'react';
import Steps from './Steps.jsx'

function App() {

    // put the isOpen state in parent make the rerender forgot whats inside the child
    const [isOpen, setIsOpen] = useState(true)

    function handleClose() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className='close' onClick={handleClose}>&times;</button>
            {isOpen ?
                <Steps />
                : null}
        </>
    )
}

export default App;