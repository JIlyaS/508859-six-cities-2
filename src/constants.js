export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  ADD_ACTIVE_CARD: `ADD_ACTIVE_CARD`,
  REMOVE_ACTIVE_CARD: `REMOVE_ACTIVE_CARD`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_LOGIN: `ADD_LOGIN`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  UPDATE_FAVORITE_OFFER: `UPDATE_FAVORITE_OFFER`,
};
export const RATINGS = [
  {title: `perfect`, stars: `5`},
  {title: `good`, stars: `4`},
  {title: `not bad`, stars: `3`},
  {title: `badly`, stars: `2`},
  {title: `terribly`, stars: `1`}
];
export const PageNames = {
  SIGN: `sign`,
  MAIN: `main`,
  DETAIL: `detail`
};
export const RATING_PERSENT = 100;
export const MAX_RATING_COUNT = 5;
export const ICON = {
  url: `img/pin.svg`,
  size: [30, 30]
};
export const LEAFLET_OPTION = {
  center: [52.38333, 4.9],
  zoom: 12
};
export const TILE_LAYER = {
  img: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  attributions: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};
export const MAX_NEARBY_OFFER = 3;
export const SortNames = {
  POPULAR: `Popular`,
  PRICE_LH: `Price: low to high`,
  PRICE_HL: `Price: high to low`,
  TOP_RATED: `Top rated first`
};
export const SORT_LIST = [
  {
    id: `id0`,
    name: `Popular`
  },
  {
    id: `id1`,
    name: `Price: low to high`
  },
  {
    id: `id2`,
    name: `Price: high to low`
  },
  {
    id: `id3`,
    name: `Top rated first`
  }
];
export const DEFAULT_OFFERS = [{
  id: 0,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
  },
  img: `apartment-01.jpg`,
  isPremium: true,
  isFavorite: false,
  price: 110,
  title: `Beautiful & luxurious apartment at great location`,
  type: `apartment`,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
  features: [...new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`])],
  insideProperties: [...new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ])],
  hostUser: {
    id: 1,
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: true,
  }
},
{
  id: `id1`,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
  },
  img: `room.jpg`,
  isPremium: false,
  price: 120,
  title: `Wood and stone place`,
  type: `room`,
  rating: 4.0,
  coordinate: [52.369553943508, 4.85309666406198],
  photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
  features: [...new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`])],
  insideProperties: [...new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ])],
  hostUser: {
    id: 2,
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: false,
  },
},
{
  id: `id2`,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
  },
  img: `apartment-02.jpg`,
  isPremium: false,
  price: 200,
  title: `Canal View Prinsengracht`,
  type: `apartment`,
  rating: 4.0,
  coordinate: [52.3909553943508, 4.929309666406198],
  photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
  features: [...new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`])],
  insideProperties: [...new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ])],
  hostUser: {
    id: 3,
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: true,
  },
},
{
  id: `id3`,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
  },
  img: `apartment-03.jpg`,
  isPremium: true,
  price: 180,
  title: `Nice, cozy, warm big bed apartment`,
  type: `apartment`,
  rating: 5.0,
  coordinate: [52.3809553943508, 4.939309666406198],
  photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
  features: [...new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`])],
  insideProperties: [...new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ])],
  hostUser: {
    id: 4,
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: false,
  },
}];

export const DEFAULT_OFFER = {
  id: 0,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
  },
  img: `apartment-01.jpg`,
  isPremium: true,
  price: 120,
  title: `Beautiful & luxurious apartment at great location`,
  type: `apartment`,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
  features: [...new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`])],
  insideProperties: [...new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ])],
  hostUser: {
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: `pro`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river
      by the unique lightness of Amsterdam. The building is green
      and from 18th century.`, `An independent House, strategically
      located between Rembrand Square and National Opera, but where
      the bustle of the city comes to rest in this alley flowery and
      colorful.`]
  },
};

export const CURRENT_OFFER = {
  id: 9,
  city: {
    name: `Cologne`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
  },
  img: `apartment-01.jpg`,
  isPremium: true,
  isFavorite: false,
  price: 120,
  title: `Beautiful & luxurious apartment at great location`,
  type: `apartment`,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
  features: [...new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`])],
  insideProperties: [...new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ])],
  hostUser: {
    id: 5,
    avatar: `avatar-angelina.jpg`,
    name: `Angelina`,
    status: true,
  },
};

export const REVIEWS = [{
  id: `review1`,
  avatar: `avatar-max.jpg`,
  name: `Max`,
  rating: 4.7,
  date: `April 2019`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
},
{
  id: `review2`,
  avatar: `avatar-max.jpg`,
  name: `Alex`,
  rating: 4.7,
  date: `May 2019`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
}];

export const MOCK_DATA_SERVER = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    [`preview_image`]: `img/1.png`,
    images: [],
    title: `Beautiful & luxurious studio at great location`,
    [`is_favorite`]: false,
    [`is_premium`]: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    [`max_adults`]: 4,
    price: 120,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      [`is_pro`]: true,
      name: `Angelina`,
      [`avatar_url`]: `img/1.png`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  }
];

export const DEFAULT_OFFER_SERVER = {
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  [`preview_image`]: `img/1.png`,
  images: [],
  title: `Beautiful & luxurious studio at great location`,
  [`is_favorite`]: false,
  [`is_premium`]: false,
  rating: 4.8,
  type: `apartment`,
  bedrooms: 3,
  [`max_adults`]: 4,
  price: 120,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    id: 3,
    [`is_pro`]: true,
    name: `Angelina`,
    [`avatar_url`]: `img/1.png`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

export const DEFAULT_OFFER_ADAPTER = {
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      coordinateCity: [52.370216, 4.895168],
      zoomCity: 10
    }
  },
  img: `img/1.png`,
  isPremium: false,
  isFavorite: false,
  photos: [],
  title: `Beautiful & luxurious studio at great location`,
  rating: 5,
  type: `apartment`,
  price: 120,
  location: {
    coordinate: [52.35514938496378, 4.673877537499948],
    zoom: 8
  },
  features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
  insideProperties: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  hostUser: {
    id: 3,
    avatar: `img/1.png`,
    name: `Angelina`,
    status: true
  }
};

export const MOCK_DATA_ADAPTER = [{
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      coordinateCity: [52.370216, 4.895168],
      zoomCity: 10
    }
  },
  img: `img/1.png`,
  isPremium: false,
  isFavorite: false,
  photos: [],
  title: `Beautiful & luxurious studio at great location`,
  rating: 5,
  type: `apartment`,
  price: 120,
  location: {
    coordinate: [52.35514938496378, 4.673877537499948],
    zoom: 8
  },
  features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
  insideProperties: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  hostUser: {
    id: 3,
    avatar: `img/1.png`,
    name: `Angelina`,
    status: true
  }
}];

export const DEFAULT_OFFER_UPDATED_FAVORITE = {
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      coordinateCity: [52.370216, 4.895168],
      zoomCity: 10
    }
  },
  img: `img/1.png`,
  isPremium: false,
  isFavorite: true,
  photos: [],
  title: `Beautiful & luxurious studio at great location`,
  rating: 5,
  type: `apartment`,
  price: 120,
  location: {
    coordinate: [52.35514938496378, 4.673877537499948],
    zoom: 8
  },
  features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
  insideProperties: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  hostUser: {
    id: 3,
    avatar: `img/1.png`,
    name: `Angelina`,
    status: true
  }
};

export const MOCK_DATA_UPDATED_FAVORITE = [{
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      coordinateCity: [52.370216, 4.895168],
      zoomCity: 10
    }
  },
  img: `img/1.png`,
  isPremium: false,
  isFavorite: true,
  photos: [],
  title: `Beautiful & luxurious studio at great location`,
  rating: 5,
  type: `apartment`,
  price: 120,
  location: {
    coordinate: [52.35514938496378, 4.673877537499948],
    zoom: 8
  },
  features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
  insideProperties: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  hostUser: {
    id: 3,
    avatar: `img/1.png`,
    name: `Angelina`,
    status: true
  }
}];

export const DEFAULT_LOGIN = {
  [`avatar_url`]: `/static/avatar/8.jpg`,
  email: `ilkolmakov@yandex.ru`,
  id: 1,
  [`is_pro`]: false,
  name: `ilkolmakov`,
};

export const MOCK_DATA_COMMENTS_SERVER = [{
  comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
  date: `2019-11-10T13:32:40.624Z`,
  id: 1,
  rating: 3,
  user: {
    id: 18,
    [`avatar_url`]: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
    [`is_pro`]: true,
    name: `Sophie`
  }
}];

export const MOCK_DATA_COMMENTS_ADAPTER = [{
  comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
  date: `November 2019`,
  id: `review1`,
  rating: 3,
  user: {
    avatar: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
    id: `user18`,
    name: `Sophie`,
    status: true
  }
}];

export const DEFAULT_REVIEW = [{
  comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
  date: `November 2019`,
  id: `review1`,
  rating: 3,
  user: {
    avatar: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
    id: `user18`,
    name: `Sophie`,
    status: true
  }
}];

export const DEFAULT_COMMENT = `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`;
