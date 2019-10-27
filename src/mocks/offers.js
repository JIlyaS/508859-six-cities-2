export const offers = [
  {
    id: 0,
    img: `apartment-01.jpg`,
    isPremium: true,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    rating: 4.8,

    photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    features: new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`]),
    insideProperties: new Set([
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
    ]),
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
    }
  },
  {
    id: 1,
    img: `room.jpg`,
    isPremium: false,
    price: 120,
    title: `Wood and stone place`,
    type: `private room`,
    rating: 4.0,
    photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    features: new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`]),
    insideProperties: new Set([
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
    ]),
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
    }
  },
  {
    id: 2,
    img: `apartment-02.jpg`,
    isPremium: false,
    price: 120,
    title: `Canal View Prinsengracht`,
    type: `apartment`,
    rating: 4.0,
    photos: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    features: new Set([`Entire place`, `3 Bedrooms`, `Max 4 adults`]),
    insideProperties: new Set([
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
    ]),
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
    }
  },
  {
    id: 3,
    img: `apartment-03.jpg`,
    isPremium: true,
    price: 180,
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`,
    rating: 5.0,
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
    }
  }
];
