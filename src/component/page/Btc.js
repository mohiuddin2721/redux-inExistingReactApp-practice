import React from 'react';
import { useSelector } from 'react-redux';

const Btc = () => {
    const btc = useSelector((state) => state.counter.count)
    const btcColor = useSelector((state) => state.color.color)
    return (
        <div>
            <span 
            className="value"
            style={{color: btcColor}}
            >Btc: {btc}</span>
        </div>
    );
};

export default Btc;