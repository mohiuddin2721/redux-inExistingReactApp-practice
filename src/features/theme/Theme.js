import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {autoColorChange} from '../theme/themeSlice';

const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()

    return (
        <div>
            <input 
            type="text" 
            className='textBox' 
            onChange={(e)=> setColor(e.target.value)} />

            <button 
            className='button'
            onClick={()=> dispatch(autoColorChange(color))}
            >Change text color</button>
        </div>
    );
};

export default Theme;