import './App.css';
import Btc from './component/page/Btc';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';

function App() {
  
  return (
    <div className="App">
      <Counter />
      <Coin />
      <Btc />
    </div>
  );
}

export default App;
