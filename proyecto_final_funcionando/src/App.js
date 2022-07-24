import React, { useState, useEffect } from 'react';
import axios from 'axios';
import chart from './components/chart';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

import './App.css';
import Coin from './Coin';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
);
//import Cards from './components/Cards';
//import { coinData } from './data';
//import { Sparklines, SparklinesLine } from 'react-sparklines';

/*populate the labels and data arrays with data from the API. To achieve this,  use the map method to create an array of the values gotten from the API:*/

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  //const [coinData, setCoinData] = useState({
  // chart.js requiere los datos de una forma concreta
  //labels: [], //por ejemplo años
  //datasets: [],
  //});
  // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=false';
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=true';

  /*const chartUrl =
    'https://api.coingecko.com/api/v3/exchanges/binance/volume_chart?days=1';*/

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        //establece en coins el resultado de la respuesta ,coins va a tener ese array
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
    //setCoinData();
    //SparklinesLine();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //función que filtra los datos
  const filteredCoins = coins.filter((coin) =>
    //para que escrito de cualquier forma coincida
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="crypto-app">
        <div className="crypto-search">
          <h1 className="crypto-text">Search a cryptocurrency</h1>

          <form>
            <input
              className="crypto-input"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              sparkLine={coin.sparkline_in_7d.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
