import React from 'react';
import { useSelector } from 'react-redux';

const Btc = () => {
    const btc = useSelector((state) => state.counter.count)
    return (
        <div>
            <span className="value">Coin: {btc}</span>
        </div>
    );
};

export default Btc;