import React from 'react';

const pizza = [{ name: 'Pizza Finghi', price: 0 }, { name: 'Pizza Salamino', price: 6 },];
const time = new Date();
const isOpen = time.getHours() > 9 && time.getHours() < 24
const snack = [];

function App() {
    // conditional rendering
    // method 1, && operator  -> not good way
    // method 2, ternaries operator  => prefer
    // method 3, multiple return  => only for early return

    if (isOpen) {
        return (
            // instead of a div as react require one parent, we can use react fragment
            // react fragment <> </> => no new element
            // add a div may alter the css
            // if we want a key, for example using map
            // we can write <React.Fragment key={index}> </React.Fragment>

            //<div>
            <>
                <p style={{color:'red'}}>something that depends on the condition</p>
                {pizza &&
                    pizza.map((aPizza) => {
                        return (
                            <Pizza pizzaDetail={aPizza} />
                        )
                    })
                }
                {snack.length > 0 ?
                    <div>
                        <p>snack available</p>
                    </div> :
                    <div>
                        <p>snack sold out</p>
                    </div>
                }

            </>
            //</div>
        )
    }
    else {
        return (
            <div>
                <p style={{color:'red'}}>{time.getHours()}</p>
            </div>
        )
    }
}

//function Pizza(props) {
// instead of receiving props, immediately destruct it,
// have the same name as the arg passed
// don't need to go back and look for props anymore

function Pizza({ pizzaDetail }) {
    // early return
    if (pizzaDetail.price < -1) return null;

    return (
        <div>
            <h1>{pizzaDetail.name}</h1>
            <p>{pizzaDetail.price > 0? `Price: ${pizzaDetail.price}`: 'sold out'}</p>
        </div>
    )
}

export default App;