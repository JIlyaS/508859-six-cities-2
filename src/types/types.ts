export interface AppProps {
  onOffersLoad: () => void;
  onAuthorizationRequire: (auth: boolean) => void;
  isAuthorizationRequired: boolean;
  store?: any
};

export interface CityListProps {
  city: string;
  cities: Array<string>;
  onChangedCityClick: (offerCity: string) => void;
};

interface formSubmit {
  blockedInput: boolean;
  blockedSubmit: boolean;
  submit: boolean;
  error: boolean;
};

export interface CommentFormProps {
  rating: string;
  comment: string;
  onAddReview?: (idHotel: string, rating: string, comment: string) => void;
  onValueFormChange: (evt: React.ChangeEvent, rating: string) => void;
  idHotel: string;
  refSubmitBtn: {
    current: HTMLButtonElement | null;
  };
  onFormResetSubmit: () => void;
  onGetDefaultForm: () => void;
  formSubmit: formSubmit;
};

export interface DetailInfoProps {
  match: {
    params: {
      offerId: string;
    }
  };
  currentOffer: {
    id: number;
    city: {
      name: string;
      location: {
        cityCoordinates: Array<number>;
        zoomCity: number;
      };
    };
    location: {
      offerCoordinates: Array<number>;
      zoom: number;
    };
    isPremium: boolean;
    isFavorite: boolean;
    img: string;
    price: number;
    title: string;
    rating: number;
    type: `apartment` | `room` | `house` | `hotel`;
    photos: Array<string>;
    features: Array<string>;
    insideProperties: Array<string>;
    hostUser: {
      avatar: string;
      name: string;
      status: boolean;
    };
  },
  otherOffers: Array<object>;
  offers: Array<object>;
  onLoadReviews: (idHotel: string) => void;
  reviews: Array<ReviewElem>;
  onChangeOfferFavorite: (offerId: number, status: number) => void;
  onGetLogin: () => void;
};

export interface favoriteOfferProps {
  id: number;
  city: {
    name: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  img: string;
  price: number;
  title: string;
  rating: number;
  type: `apartment` | `room` | `house` | `hotel`;
};

export interface FavoritesListProps {
  favoriteOffers: Array<favoriteOfferProps>;
  onLoadFavorites: () => void;
  isFavoritesFetching: boolean;
  onChangeOfferFavorite: (offerId: number, status: number) => void;
};

export interface HeaderProps {
  isAuthorizationRequired: boolean;
  loginStore: {
    email: string;
  };
};

export interface MainProps {
  city: string;
  offers: Array<object>;
  activeOfferCard: {
    id: number;
    location: object;
  };
  isOffersFetching: boolean;
  activeSortName: string;
};
interface CoordinateProps {
  offerCoordinates: Array<number>,
  zoom: number
};
export interface MapProps {
  coordinates: Array<CoordinateProps>;
  activeCoordinate: CoordinateProps;
  city?: string;
  activeCityCoordinate: {
    cityCoordinates: Array<number>;
    zoomCity: number;
  };
};

export interface OfferCardProps {
  offer: {
    isFavorite: boolean;
    isPremium: boolean;
    img: string;
    price: number;
    title: string;
    rating: number;
    type: `apartment` | `room` | `house` | `hotel`;
  };
  offerId: number;
  onActiveOfferMouseEnter?: (offer: object) => void;
  onDeactiveOfferMouseLeave?: () => void;
  onFavoriteOfferClick: (offerId: number, isFavorite: boolean) => void;
  classCard: {
    card: string;
    wrapper: string;
    info: string;
  },
  isFavoriteOffer?: boolean;
};

interface OfferProps {
  id: number;
  isFavorite: boolean;
  isPremium: boolean;
  img: string;
  price: number;
  title: string;
  rating: number;
  type: `apartment` | `room` | `house` | `hotel`;
};

export interface OfferListProps {
  offers: Array<OfferProps>;
  onActiveOfferMouseEnter: (offerCard: object) => void;
  onDeactiveOfferMouseLeave: () => void;
  onChangeOfferFavorite: (offerId: number, status: number) => void;
  onGetLogin: () => void;
  classOfferCard: string;
};

export interface PageLayoutProps {
  pageName: string;
  children: React.ReactNode;
};

export interface ReviewItemProps {
  review: {
    rating: number;
    date: string;
    dateTime: string;
    comment: string;
    user: {
      avatar: string;
      name: string;
    };
  };
};

interface ReviewElem {
  id: string;
  dateTimestamp: number;
  rating: number;
  date: string;
  dateTime: string;
  comment: string;
  user: {
    avatar: string;
    name: string;
  }
}

export interface ReviewListProps {
  reviews: Array<ReviewElem>;
};

export interface SignInProps {
  email: string;
  password: string;
  history: {
    push: (param: string) => void;
  };
  onCheckLogin: (email: string, password: string) => void;
  onValueFormChange: (evt: React.ChangeEvent, param: string) => void;
};

export interface SortListProps {
  isSortOpened: boolean;
  activeSortName: string;
  onSortElemClick: (sortName: string) => void;
  onSortListClick: () => void;
};

export interface WithCommentFormState {
  [propName: string]: any;
  rating: string;
  comment: string;
};

export interface WithInjectedCommentFormProps {
  refSubmitBtn: {
    current: HTMLButtonElement | null;
  };
  rating: string;
  comment: string;
  onValueFormChange: (evt: React.ChangeEvent, param: string) => void;
  onFormResetSubmit: () => void;
};

export interface WithSignInState {
  [propName: string]: any;
  email: string;
  password: string;
};

export interface WithSignInProps {
  email?: string;
  password?: string;
  onValueFormChange?: (evt: React.ChangeEvent, param: string) => void;
};

export interface WithSortListState {
  isSortOpened: boolean;
};

export interface WithInjectedSortListProps {
  isSortOpened: boolean;
  onSortListClick: () => void;
};
