import { useState } from 'react';
import './counter-style.css';

import CounterButtons from './CounterButtons';


export default function Counter(){

    const [count,setCount] = useState(0);

    function incrementCountBy(by){
        setCount(count + by)
    }
    function decrementCountBy(by){
        if(count === 0) setCount(0)
        else setCount(count - by)
    }

    return(
        <div>
            <h1 className="counter-title" >Counter App</h1>
            <div className='counter-display'><h2>{count}</h2></div>
            <CounterButtons by={1} incrementCountBy={incrementCountBy} decrementCountBy={decrementCountBy} />
            <CounterButtons by={2} incrementCountBy={incrementCountBy} decrementCountBy={decrementCountBy} />
            <CounterButtons by={5} incrementCountBy={incrementCountBy} decrementCountBy={decrementCountBy} />
            <button onClick={()=>setCount(0)} className='reset-btn'>Reset</button>
        </div>
    )
}