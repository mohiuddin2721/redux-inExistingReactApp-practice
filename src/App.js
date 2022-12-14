import './App.css';
import Btc from './component/page/Btc';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import Theme from './features/theme/Theme';

function App() {
  
  return (
    <div className="App">
      <Counter />
      <Coin />
      <Btc />
      <Theme />
    </div>
  );
}

export default App;
