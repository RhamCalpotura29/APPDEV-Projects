import React, {useState} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);
    //to increment
    const incrementCount = () => {
        //prev state -> new state
        setCount(count => count + 2)
    }

    //to decrement
    const decrementCount = () => {
        setCount(count => count - 1)
    }

    //reset count

    const resetCount = () => {
        setCount(count => count = 0)
    }

    return(
        <div className="container">
            <p className="counter-container"> Counter: <br /> {count}</p>
            &nbsp;
            <button className="button-container-increment" onClick={incrementCount}>Increment: </button>
            <button className="button-container-reset" onClick={resetCount}>Reset: </button>
            <button className="button-container-decrement" onClick={decrementCount}>Decrement: </button>
            
        </div>
    )
}