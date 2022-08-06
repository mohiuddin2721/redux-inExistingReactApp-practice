import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const counterColor = useSelector((state) => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <button 
            className='button' 
            // aria-label='Increment value' 
            onClick={() => { dispatch(increment()) }}> + </button>

            <span 
            className='value'
            style={{color: counterColor}}
            >Count: {count}</span>

            <button 
            className='button' 
            // aria-label='Decrement value' 
            onClick={() => { dispatch(decrement()) }}> - </button>

            <button 
            className='button' 
            // aria-label='Decrement value' 
            onClick={() => { dispatch(incrementByAmount(10)) }}> Increment by 10 </button>
        </div>
    );
};

export default Counter;