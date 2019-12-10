export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  ADD_ACTIVE_CARD: `ADD_ACTIVE_CARD`,
  REMOVE_ACTIVE_CARD: `REMOVE_ACTIVE_CARD`,
  FETCH_OFFERS_REQUEST: `FETCH_OFFERS_REQUEST`,
  FETCH_OFFERS_SUCCESS: `FETCH_OFFERS_SUCCESS`,
  FETCH_OFFERS_FAILURE: `FETCH_OFFERS_FAILURE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_LOGIN: `ADD_LOGIN`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  UPDATE_FAVORITE_OFFER: `UPDATE_FAVORITE_OFFER`,
  FETCH_FAVORITES_REQUEST: `FETCH_FAVORITES_REQUEST`,
  FETCH_FAVORITES_SUCCESS: `FETCH_FAVORITES_SUCCESS`,
  FETCH_FAVORITES_FAILURE: `FETCH_FAVORITES_FAILURE`,
  FORM_SUBMISSION: `FORM_SUBMISSION`,
  FORM_SUBMISSION_SUCCESS: `FORM_SUBMISSION_SUCCESS`,
  FORM_SUBMISSION_ERROR: `FORM_SUBMISSION_ERROR`,
  FORM_SUBMISSION_DEFAULT: `FORM_SUBMISSION_DEFAULT`,
};
export const PageName = {
  SIGN: `sign`,
  MAIN: `main`,
  DETAIL: `detail`,
  FAVORITES: `favorites`,
  FAVORITES_EMPTY: `favorites_empty`
};
export const Comment = {
  MIN: 50,
  MAX: 300
};
export const OfferCardName = {
  MAIN_OFFER: `main_offer`,
  DETAIL_OFFER: `detail_offer`,
  FAVORITE_OFFER: `favorite_offer`,
};
export const SortName = {
  POPULAR: `Popular`,
  PRICE_LH: `Price: low to high`,
  PRICE_HL: `Price: high to low`,
  TOP_RATED: `Top rated first`
};
export const RATINGS = [
  {title: `perfect`, stars: `5`},
  {title: `good`, stars: `4`},
  {title: `not bad`, stars: `3`},
  {title: `badly`, stars: `2`},
  {title: `terribly`, stars: `1`}
];
export const RATING_PERSENT = 100;
export const MAX_RATING_COUNT = 5;
export const MAX_REVIEWS = 10;
export const MAX_DETAIL_IMG = 6;
export const UNAUTH_STATUS = 401;
export const MapIcon = {
  URL: `/img/pin.svg`,
  ACTIVE_URL: `/img/pin-active.svg`,
  SIZE: [30, 30]
};
export const LEAFLET_OPTION = {
  center: [52.38333, 4.9],
  zoom: 12
};
export const TileLayerMap = {
  IMG: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTIONS: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
    contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};
export const OfferCardImg = {
  WIDTH: `260`,
  HEIGHT: `200`,
  SMALL_WIDTH: `150`,
  SMALL_HEIGHT: `110`
};
export const MAX_NEARBY_OFFER = 3;
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
export const CityListMock = {
  CITY: `Amsterdam`,
  CITIES: [`Amsterdam`, `Paris`]
};
export const CommentFormMock = {
  RATING: `4`,
  ID_HOTEL: `1`,
  FORM_SUBMIT: {
    blockedInput: false,
    error: false,
    blockedSubmit: true,
    submit: false
  },
  COMMENT: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
};
export const DetailInfoMock = {
  ID: `1`
};
export const HeaderMock = {
  LOGIN: {
    email: `info@mail.ru`
  },
  IS_AUTH: false
};
export const MainMock = {
  CITY: `Amsterdam`,
  ACTIVE_SORT_NAME: `Popular`,
  IS_OFFERS_FETCHING: false
};
export const MapMock = {
  COORDINATES: [{offerCoordinates: [1, 2], zoom: 16}, {offerCoordinates: [2, 3], zoom: 16}],
  ACTIVE_COORDINATE: {offerCoordinates: [5, 6], zoom: 16},
  ACTIVE_CITY_COORDINATE: {cityCoordinates: [1, 1], zoomCity: 13},
  CITY: `Amsterdam`
};
export const OfferCardMock = {
  OFFER: {
    title: ``,
    type: `room`,
    price: 0,
    img: `room.jpg`,
    rating: 0,
    isPremium: false,
    isFavorite: false
  },
  OFFER_ID: 0,
  CLASS_CARD: {
    list: ``,
    card: ``,
    wrapper: ``,
    info: ``
  }
};
export const OfferListMock = {
  OFFERS: [{
    id: 0,
    title: ``,
    type: `room`,
    price: 0,
    img: `room.jpg`,
    rating: 0,
    isPremium: false,
    isFavorite: false,
  }],
  CLASS_OFFER_CARD: `main_offer`,
  CLASS_CARD: {
    list: ``,
    card: ``,
    wrapper: ``,
    info: ``
  }
};
export const ReviewItemMock = {
  REVIEW: {
    comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    date: `November 2019`,
    dateTime: `2019-11-10`,
    id: `review1`,
    rating: 3,
    user: {
      avatar: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
      id: `user18`,
      name: `Sophie`,
      status: true
    }
  }
};
export const ReviewListMock = {
  REVIEWS: [{
    comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    date: `November 2019`,
    dateTime: `2019-11-10`,
    id: `review1`,
    rating: 3,
    user: {
      avatar: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
      id: `user18`,
      name: `Sophie`,
      status: true
    }
  }]
};
export const SortListMock = {
  IS_SORT_OPENED: false,
  ACTIVE_SORT_NAME: `Popular`
};
export const WithCommentFormMock = {
  RATING_NAME: `rating`,
  COMMENT_NAME: `comment`,
  RATING: `5`,
  COMMENT: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`
};
export const OperationMock = {
  STATUS: 200,
  CITY: `Amsterdam`,
  COMMENT: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
  EMAIL: `ilkolmakov@yandex.ru`,
  PASSWORD: `123`,
  ID_HOTEL: 1,
  RATING: 3,
  FAVORITE_STATUS: 1,
};
export const AxiosConfig = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};
export const WithSignInMock = {
  EMAIL_NAME: `email`,
  PASSWORD_NAME: `password`,
  EMAIL: `info@mail.ru`,
  PASSWORD: `123`
};
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
  location: {
    offerCoordinates: [52.3909553943508, 4.85309666406198],
    zoom: 8
  },
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
  offerCoordinates: [52.369553943508, 4.85309666406198],
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
  offerCoordinates: [52.3909553943508, 4.929309666406198],
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
  location: {
    offerCoordinates: [52.3809553943508, 4.939309666406198],
    zoom: 8
  },
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
  location: {
    offerCoordinates: [52.3909553943508, 4.85309666406198],
    zoom: 8
  },
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
  location: {
    offerCoordinates: [52.3909553943508, 4.85309666406198],
    zoom: 8
  },
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
      cityCoordinates: [52.370216, 4.895168],
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
    offerCoordinates: [52.35514938496378, 4.673877537499948],
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
      cityCoordinates: [52.370216, 4.895168],
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
    offerCoordinates: [52.35514938496378, 4.673877537499948],
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
      cityCoordinates: [52.370216, 4.895168],
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
    offerCoordinates: [52.35514938496378, 4.673877537499948],
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

export const DEFAULT_OFFER_UPDATED_FAVORITE_SERVER = {
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
  [`is_favorite`]: true,
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

export const MOCK_DATA_UPDATED_FAVORITE_SERVER = [{
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
  [`is_favorite`]: true,
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
}];

export const MOCK_DATA_UPDATED_FAVORITE = [{
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      cityCoordinates: [52.370216, 4.895168],
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
    offerCoordinates: [52.35514938496378, 4.673877537499948],
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
  dateTime: `2019-11-10`,
  dateTimestamp: 1573392760624,
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
