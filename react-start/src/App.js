import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");
  const [nowCoin, setNowCoin] = useState();

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onSelectCoin = (event) => {
    setNowCoin(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setNowCoin(json[0].quotes.USD.price);
      setLoading(false);
    });
  }, []);

  return <div>
          <h1>The Coins!({coins.length})</h1>
          
          {loading ? <strong>Loading...</strong> :
            <div>
              <input type="text" value={input} onChange={onChange}/>
              <br />
              <select value={nowCoin} onChange={onSelectCoin}>
                {coins.map((item) => 
                  <option value={item.quotes.USD.price}>
                    {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
                  </option>)}
              </select>

              <h1>Convert USD To Coin = {input / nowCoin}</h1>
            </div>
          }
        </div>;  
}

export default App;
