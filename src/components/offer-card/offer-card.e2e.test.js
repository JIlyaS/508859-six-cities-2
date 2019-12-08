import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from './offer-card';
import {OfferCardMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

it(`OfferCard correct callback function`, () => {
  const offerMouseEnterHandler = jest.fn();
  const offerMouseLeaveHandler = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={OfferCardMock.OFFER}
    offerId={OfferCardMock.OFFER_ID}
    activeOfferMouseEnterHandler={offerMouseEnterHandler}
    deactiveOfferMouseLeaveHandler={offerMouseLeaveHandler}
    classCard={OfferCardMock.CLASS_CARD}
    changeFavoriteOfferClickHandler={() => {}}
  />);

  const mouseenterButton = offerCard.find(`.place-card`);
  mouseenterButton.simulate(`mouseenter`);

  expect(offerMouseEnterHandler).toHaveBeenCalledWith(OfferCardMock.OFFER);
});
