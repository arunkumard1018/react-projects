
import {propTypes} from 'prop-types'
export default function CounterButtons({by, incrementCountBy,decrementCountBy}) {
    
    function incrementBy(){
        incrementCountBy(by);
    }
    function decrementBy(){
        decrementCountBy(by);
    }
    
    return (
        <div className='btn-row'>
            <button onClick={incrementBy} className='btn'>+{by}</button>
            <button onClick={decrementBy} className='btn'>-{by}</button>
        </div>
    )
}

// CounterButtons.propTypes ={
//     by: propTypes.number
// }

CounterButtons.defaultProps ={
    by:1
}