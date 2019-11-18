import {shuffleElements} from './utils';

class Adapter {
  static getOffers(offers) {
    return offers.map(Adapter.getOffer);
  }

  static getOffer(offer) {
    return {
      id: `id${offer.id}`,
      city: {
        name: offer.city.name,
        location: {
          coordinateCity: [
            offer.city.location.latitude,
            offer.city.location.longitude
          ],
          zoomCity: offer.city.location.zoom
        }
      },
      img: offer.preview_image,
      isPremium: offer[`is_premium`],
      price: offer.price,
      title: offer.title,
      type: offer.type,
      rating: Math.round(offer.rating),
      photos: (shuffleElements(offer.images)).slice(0, 6),
      location: {
        coordinate: [offer.location.latitude, offer.location.longitude],
        zoom: offer.location.zoom,
      },
      features: [
        ...new Set([
          `Entire place`,
          `${offer.bedrooms} Bedrooms`,
          `Max ${offer[`max_adults`]} adults`
        ])
      ],
      insideProperties: offer.goods,
      hostUser: {
        id: offer.host.id,
        avatar: offer.host[`avatar_url`],
        name: offer.host.name,
        status: offer.host[`is_pro`]
      }
    };
  }
}

export default Adapter;