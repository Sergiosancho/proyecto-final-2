import React from 'react';
import './Coin.css';
import './global.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
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
      </div>
    </div>
  );
};

export default Coin;
