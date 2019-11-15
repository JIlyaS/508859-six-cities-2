import {RATING_PERSENT, MAX_RATING_COUNT, SortNames} from './constants';

export const firstUpperCase = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const convertRating = (rating) => {
  return rating * RATING_PERSENT / MAX_RATING_COUNT;
};

export const getCityOffers = (allOffers, city) => {
  return allOffers.filter((offer) => offer.city.name === city);
};

export const sortOfferList = (offers, sortName) => {
  switch (sortName) {
    case SortNames.POPULAR:
      return offers.slice();
    case SortNames.PRICE_LH:
      return offers.slice().sort((prev, curr) => prev.price - curr.price);
    case SortNames.PRICE_HL:
      return offers.slice().sort((prev, curr) => curr.price - prev.price);
    case SortNames.TOP_RATED:
      return offers.slice().sort((prev, curr) => curr.rating - prev.rating);
    default:
      throw new Error(`Undefined SortName element`);
  }
};

export const getMapCoordinates = (offers, activeOfferCard) => {
  if (Object.keys(activeOfferCard).length === 0) {
    return offers.map((offer) => offer.coordinate);
  }
  const otherOfferCards = offers.filter((offer) => offer.id !== activeOfferCard.id);
  return otherOfferCards.map((offer) => offer.coordinate);
};

export const getCorrectDataHotels = (data) => {
  return data.map((hotel) => ({
    id: `id${hotel.id}`,
    city: {
      name: hotel.city.name,
      location: {
        coordinate: [
          hotel.city.location.latitude,
          hotel.city.location.longitude,
        ],
        zoom: hotel.city.location.zoom
      },
    },
    img: hotel.preview_image,
    isPremium: hotel[`is_premium`],
    price: hotel.price,
    title: hotel.title,
    type: hotel.type,
    rating: hotel.rating,
    photos: hotel.images,
    features: [...new Set([`Entire place`, `${hotel.bedrooms} Bedrooms`, `Max ${hotel[`max_adults`]} adults`])],
    insideProperties: hotel.goods,
    hostUser: {
      id: hotel.host.id,
      avatar: hotel.host[`avatar_url`],
      name: hotel.host.name,
      status: hotel.host[`is_pro`],
    },
    reviews: [
      // {
      //   id: `review1`,
      //   avatar: `avatar-max.jpg`,
      //   name: `Max`,
      //   rating: 4.7,
      //   date: `April 2019`,
      //   description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      // },
      // {
      //   id: `review2`,
      //   avatar: `avatar-max.jpg`,
      //   name: `Alex`,
      //   rating: 4.0,
      //   date: `May 2019`,
      //   description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      // }
    ]
  }));
};

