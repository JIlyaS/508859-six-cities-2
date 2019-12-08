import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card';
import {OfferCardMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard correct callback function`, () => {
  const onActiveOfferMouseEnter = jest.fn();
  const onDeactiveOfferMouseLeave = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={OfferCardMock.OFFER}
    offerId={OfferCardMock.OFFER_ID}
    classCard={OfferCardMock.CLASS_CARD}
    onFavoriteOfferClick={() => {}}
    onActiveOfferMouseEnter={onActiveOfferMouseEnter}
    onDeactiveOfferMouseLeave={onDeactiveOfferMouseLeave}
  />);

  const mouseenterButton = offerCard.find(`.place-card`);
  mouseenterButton.simulate(`mouseenter`);

  expect(onActiveOfferMouseEnter).toHaveBeenCalledWith(OfferCardMock.OFFER);
});
