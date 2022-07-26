import Coin from './Coin';
import { render } from '@testing-library/react';
//describes diferentes escenarios del componente
describe('Coin', () => {
  //given
  //when
  test('coin render ,coin name = true ', () => {
    render(<coin />);
    //then
    expect(Coin.name).toBe(true);
  });
});

test('retorna  status 200', async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=true',
  );
  expect(response.status).toBe(200);
});
