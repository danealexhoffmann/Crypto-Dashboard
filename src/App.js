import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import { CoinList } from "./components/CoinList";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Crypto Daily</h1>
      <div className="app-wrapper">
        <div>
          <CurrencyConverter />
          <CoinList />
        </div>
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;
