import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard correct callback function`, () => {
  const offerMouseEnterHandler = jest.fn();
  const offerMouseLeaveHandler = jest.fn();
  const mockOfferCardData = {
    title: ``,
    type: `room`,
    price: 0,
    img: `room.jpg`,
    rating: 0,
    isPremium: false,
    isFavorite: false
  };
  const offerCard = shallow(<OfferCard
    offer={mockOfferCardData}
    offerId={0}
    activeOfferMouseEnterHandler={offerMouseEnterHandler}
    deactiveOfferMouseLeaveHandler={offerMouseLeaveHandler}
    classCard={{
      list: ``,
      card: ``,
      wrapper: ``,
      info: ``
    }}
    changeFavoriteOfferClickHandler={() => {}}
  />);

  const mouseenterButton = offerCard.find(`.place-card`);
  mouseenterButton.simulate(`mouseenter`);

  expect(offerMouseEnterHandler).toHaveBeenCalledWith(mockOfferCardData);
});
