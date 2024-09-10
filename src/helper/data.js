export const filterOptions = [
  { display: "Free Cancellation", key: "hasFreeCancellation" },
  { display: "Breakfast Included", key: "includesBreakfast" },
  { display: "Bestsellers", key: "isBestSeller" },
  { display: "Parking", key: "hasParking" },
  { display: "Pets Allowed", key: "allowsPets" },
  { display: "Room Service", key: "hasRoomService" },
  { display: "Fitness Centre", key: "hasFitnessCenter" }
];

export const bookingData = [
    {
      id: 1,
      reservation: "Seckin Ozturk",
      day: new Date(),
      completed: true,
      hostel: "Seckin's Dream Glamping",
      people: 2,
    },
  ];


export const hotels = [
  {
    id: 1,
    name: "Seckin's Backpackers  Hostel",
    rating: 8.3,
    reviewCount: 2393,
    pricePerNight: 308.34,
    imageSrc:
      "https://cdn.pixabay.com/photo/2013/09/23/04/36/hostel-185156_960_720.jpg",
    roomsRemaining: 9,
    hasFreeCancellation: true,
    includesBreakfast: true,
    isBestSeller: false,
    hasParking: false,
    allowsPets: false,
    hasRoomService: false,
    hasFitnessCenter: false
  },
  {
    id: 2,
    name: "Pool Party Hostel",
    rating: 5.6,
    reviewCount: 40642,
    pricePerNight: 240.0,
    imageSrc:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/109772691.jpg?k=95c8f1d5e56a41974feed67d764d03b7ecb35d05520b26a4a0147e6abd16bbef&o=&hp=1",
    roomsRemaining: 22,
    hasFreeCancellation: false,
    includesBreakfast: true,
    isBestSeller: true,
    hasParking: true,
    allowsPets: false,
    hasRoomService: true,
    hasFitnessCenter: true
  },
  {
    id: 3,
    name: "Las Frontier Hotel",
    rating: 8.7,
    reviewCount: 5301,
    pricePerNight: 314,
    imageSrc:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/367650039.jpg?k=667b4283a61cb6b930d914dc7e7c0c4135e64b9fb94b5881033b6af637666d48&o=&hp=1",
    roomsRemaining: 2,
    hasFreeCancellation: false,
    includesBreakfast: false,
    isBestSeller: true,
    hasParking: true,
    allowsPets: false,
    hasRoomService: false,
    hasFitnessCenter: true
  },
  {
    id: 4,
    name: "Golden Beach Hotel",
    rating: 7.7,
    reviewCount: 1519,
    pricePerNight: 427,
    imageSrc:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/365426973.jpg?k=839525cd88d3bf386761862062bc09b4675044a912c3a2e3d23f61cb32d45086&o=&hp=1",
    roomsRemaining: 14,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: false,
    hasParking: false,
    allowsPets: true,
    hasRoomService: false,
    hasFitnessCenter: true
  },
  {
    id: 5,
    name: "Coconut Beach Bungalows",
    rating: 8.5,
    reviewCount: 1271,
    pricePerNight: 289,
    imageSrc:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/494834271.jpg?k=f675989db1803850cd44b100f5fa237c95542a75486925157018f870df5619ab&o=&hp=1",
    roomsRemaining: 8,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: false,
    hasParking: true,
    allowsPets: false,
    hasRoomService: true,
    hasFitnessCenter: false
  },
  {
    id: 6,
    name: "Seckin's Dream Glamping",
    rating: 8.5,
    reviewCount: 1271,
    pricePerNight: 289,
    imageSrc:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/270219506.jpg?k=f05a18cf090cc21129efa61872d8b299dc74f1c2ee0bbaffac7c741d6f5bfa91&o=&hp=1",
    roomsRemaining: 8,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: true,
    hasParking: true,
    allowsPets: true,
    hasRoomService: true,
    hasFitnessCenter: false
  },

];
