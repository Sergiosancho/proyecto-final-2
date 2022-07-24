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
