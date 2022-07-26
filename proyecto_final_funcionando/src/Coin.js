import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  sparkLine,
}) => {
<<<<<<< HEAD
  const [data, setData] = useState({
=======
  const [data, setData] =useState({
>>>>>>> c16539ed8a4f32e95a793f6ed1d6f7c54c51764c
    labels: sparkLine.map((item) => item),
    datasets: [
      {
        label: '',
        data: sparkLine,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
        lineTension: 0,
        pointRadius: 0,
        pointHitRadius: 0,
      },
    ],
  });

  return (
    <>
      <div className="crypto-container">
        <div className="crypto-row">
          <div className="crypto">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="crypto-symbol">{symbol} </p>
          </div>
          <div className="crypto-data">
            <p className="crypto-price">{price}€</p>

            <p className="crypto-volume">{volume.toLocaleString()}€</p>

            {priceChange < 0 ? (
              //El método toFixed() formatea un número usando notación de punto fijo
              <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="crypto-percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="crypto-marketcap">
              Mkt Cap: {marketcap.toLocaleString()}€
            </p>
          </div>
          <div className="crypto-graph">
            <Line
              //renderizas el gráfico pasándole las opciones que te interesan de entre todas las disponibles
              type="line"
              data={data}
              options={{
                responsive: true,

                plugins: {
                  title: {
                    display: false,
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
