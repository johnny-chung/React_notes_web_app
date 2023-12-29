import React, { useState } from 'react'

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];


function Steps() {

    const [step, setStep] = useState(0)
    // don't need to create another one for message

    //const [test] = useState({name:'ABC'})

    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 0) {

            // do not update the state using the state itself.
            // may cause error, as state is not update until rerendering
            // use a call back function instead
            //setStep(step - 1)


            // the set function auto pass the state to the set function
            setStep((currentStep) => currentStep - 1)
        }
    }

    function handleNext() {
        if (step < 2) {
            //setStep(step + 1)
            // this second call will not work if passing state var instead of call back
            //setStep(step + 1)
            setStep((s) => s + 1)
            setStep((s) => s + 1)
        }
        /// bad practice => use setState func
        //test.name += 'X'
    }


    return (
        <>
            <button className='close' onClick={() => setIsOpen((Open) => !Open)}>Child &times;</button>
            {isOpen ?
                <div className='steps'>
                    <div className='numbers'>
                        <div className={step >= 0 ? "active" : ""}>1</div>
                        <div className={step >= 1 ? "active" : ""}>2</div>
                        <div className={step >= 2 ? "active" : ""}>3</div>

                    </div>
                    <p className='message'>Step {step + 1}: {messages[step]} </p>
                    <div className='buttons'>
                        <button
                            onClick={handlePrevious}
                        >Previous
                        </button>
                        <button
                            onClick={handleNext}
                        >Next
                        </button>
                    </div>
                </div>
                : null}
        </>
    )
}

export default Steps;