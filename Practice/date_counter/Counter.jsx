import React, { useState } from 'react'

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function handleStepAdd() {
        setStep((prev) => prev + 1)
    }

    function handleStepMinus() {
        if (step >= 1) {
            setStep((prev) => prev - 1)
        }
    }

    function handleCounterAdd() {
        setCount((prev) => prev + step)
    }

    function handleCounterMinus() {
        setCount((prev) => {
            if ((prev - step) < 0) return 0
            return prev - step
        })
    }

    let currentDate = new Date()
    const oneDay = 24 * 60 * 60 * 1000;
    return (
        <>
            <div className='step'>
                <button onClick={handleStepMinus}>-</button>
                <span>Step: {step}</span>
                <button onClick={handleStepAdd}>+</button>
            </div>
            <div className='count'>
                <button onClick={handleCounterMinus}>-</button>
                <span>Count: {count}</span>
                <button onClick={handleCounterAdd}>+</button>
            </div>
            <div className='date'>

                {count === 0 ?
                    <span>Today is {currentDate.toLocaleDateString()}</span> :
                    <span>{count} days from today is {(new Date(currentDate.getTime() + count * oneDay)).toLocaleDateString()}</span>
                }

            </div>
        </>
    )
}

export default Counter;