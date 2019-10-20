import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const main = shallow(<Main
    rentList={[{
      title: ``,
      type: `Private room`,
      price: 0,
      image: `room.jpg`,
      rating: 0,
      premium: false
    }]}
    onDetailModalClick={clickHandler}
  />);

  const startButton = main.find(`.place-card__name a`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
