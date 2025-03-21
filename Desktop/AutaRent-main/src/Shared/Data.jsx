const Locations = [
  {
    id: 1,
    name: "İstanbul Airport",
  },
  {
    id: 2,
    name: "Sabiha Gökçen Airport",
  },
  {
    id: 3,
    name: "Atatürk Airport",
  },
  {
    id: 4,
    name: "Levent/İstanbul",
  },
  {
    id: 5,
    name: "Avcılar/İstanbul",
  },
  {
    id: 6,
    name: "Ortaköy/İstabul",
  },
];

const CarFuelType = [
  {
    id: 1,
    name: "Gasoline",
  },
  {
    id: 2,
    name: "Diesel",
  },
  {
    id: 3,
    name: "Electric",
  },
];

const CarType = [
  {
    id: 1,
    name: "Sedan",
  },
  {
    id: 2,
    name: "SUV",
  },
  {
    id: 3,
    name: "Coupe",
  },
  {
    id: 4,
    name: "Hatchback",
  },
  {
    id: 5,
    name: "Cabrio",
  },
  {
    id: 6,
    name: "Van",
  },
  {
    id: 7,
    name: "Pick-Up",
  },

];

const CarBrands = [
  {
    id: 1,
    name: "Alfa Romeo",
  },
  {
    id: 2,
    name: "Aston Martin",
  },
  {
    id: 3,
    name: "Audi",
  },
  {
    id: 4,
    name: "Bentley",
  },
  {
    id: 5,
    name: "BMW",
  },
  {
    id: 6,
    name: "Bugatti",
  },
  {
    id: 7,
    name: "Buick",
  },
  {
    id: 8,
    name: "Cadillac",
  },
  {
    id: 9,
    name: "Chevrolet",
  },
  {
    id: 10,
    name: "Chrysler",
  },
  {
    id: 11,
    name: "Cupra",
  },
  {
    id: 12,
    name: "Dodge",
  },
  {
    id: 13,
    name: "Ferrari",
  },
  {
    id: 14,
    name: "Fiat",
  },
  {
    id: 15,
    name: "Ford",
  },
  {
    id: 16,
    name: "GMC",
  },
  {
    id: 17,
    name: "Honda",
  },
  {
    id: 18,
    name: "Hyundai",
  },
  {
    id: 19,
    name: "Infiniti",
  },
  {
    id: 20,
    name: "Jaguar",
  },
  {
    id: 21,
    name: "Jeep",
  },
  {
    id: 22,
    name: "Kia",
  },
  {
    id: 23,
    name: "Lamborghini",
  },
  {
    id: 24,
    name: "Land Rover",
  },
  {
    id: 25,
    name: "Lexus",
  },
  {
    id: 26,
    name: "Lincoln",
  },
  {
    id: 27,
    name: "Maserati",
  },
  {
    id: 28,
    name: "Mazda",
  },
  {
    id: 29,
    name: "McLaren",
  },
  {
    id: 30,
    name: "Mercedes",
  },
  {
    id: 31,
    name: "Mini",
  },
  {
    id: 32,
    name: "Mitsubishi",
  },
  {
    id: 33,
    name: "Nissan",
  },
  {
    id: 34,
    name: "Pagani",
  },
  {
    id: 35,
    name: "Peugeot",
  },
  {
    id: 36,
    name: "Porsche",
  },
  {
    id: 37,
    name: "Ram",
  },
  {
    id: 38,
    name: "Rolls Royce",
  },
  {
    id: 39,
    name: "Saab",
  },
  {
    id: 40,
    name: "Subaru",
  },
  {
    id: 41,
    name: "Suzuki",
  },
  {
    id: 42,
    name: "Tesla",
  },
  {
    id: 43,
    name: "TOGG",
  },
  {
    id: 44,
    name: "Toyota",
  },
  {
    id: 45,
    name: "Volkswagen",
  },
  {
    id: 46,
    name: "Volvo",
  },
  {
    id: 47,
    name: "Wiesmann",
  },
  {
    id: 48,
    name: "Zagato",
  },
  {
    id: 49,
    name: "Morgan",
  },
  {
    id: 50,
    name: "Rimac",
  },
];


const Hours = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  time: `${i.toString().padStart(2, "0")}:00`,
}));

const Advertise = [
  {
    id: 1,
    text: "Rent Auta was chosen as the best car rental site of 2024.",
    image: 'https://static.tildacdn.net/tild3633-3166-4733-b865-386431383866/WTA.png',
  },
  {
    id: 2,
    text: "We aim to provide you with a better service by working with premium brand vehicles.",
    image: 'https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/5AkoGAyHpGtJYt7v2dTxrpXPbk4QdgcWlC1VSq46.jpg',
  },
  {
    id: 3,
    text: "You are always safe with our contracted insurance companies",
    image: 'https://sigortacigazetesi.com.tr/wp-content/uploads/2022/05/axa-sigorta-logo-.png',
  },
  {
    id: 4,
    text: "Advantageous installment opportunities special to Garanti Bank",
    image: 'https://turkishtimedergi.com/wp-content/uploads/2024/12/Garanti-BBVA.jpg',
  },
  {
    id: 5,
    text: "Enjoy the journey while your private chauffeur drives your vehicle.",
    image: 'https://portvale.com.tr/images/2019/09/22/photo-03-05-2016-22-45-08.jpg',
  },
  {
    id: 6,
    text: "50% discount opportunity for your first rental",
    image: 'https://img.freepik.com/premium-vector/50-off-discount-banner-special-offer-sale-50-percent-off-sale-discount-offer-luxury-promotion-banner_156943-1649.jpg',
  },
]

export default {
  Locations,
  Hours,
  Advertise,
  CarBrands,
  CarFuelType,
  CarType,
};
