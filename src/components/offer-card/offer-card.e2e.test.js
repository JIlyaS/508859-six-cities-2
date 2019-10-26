import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard correct callback function`, () => {
  const offerMouseEnterHandler = jest.fn();
  const mockOfferCardData = {
    title: ``,
    type: `private room`,
    price: 0,
    img: `room.jpg`,
    rating: 0,
    isPremium: false
  };
  const offerCard = shallow(<OfferCard
    offer={mockOfferCardData}
    activeOfferMouseEnterHandler={offerMouseEnterHandler}
  />);

  const mouseenterButton = offerCard.find(`.place-card`);
  mouseenterButton.simulate(`mouseenter`, mockOfferCardData);

  expect(offerMouseEnterHandler).toHaveBeenCalledWith(mockOfferCardData);
});
