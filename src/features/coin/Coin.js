import { useSelector } from 'react-redux';

function Coin() {
    const coin = useSelector((state) => state.counter.count)
    const coinColor = useSelector((state) => state.color.color)

    return (
        <div>
            <span 
            className="value"
            style={{color: coinColor}}>Coin: {coin}</span>
        </div>
    );
};

export default Coin;