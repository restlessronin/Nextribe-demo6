

import { CountryData, CountryStatus, GlobalStats, LeaderboardEntry, UserProfile, CabinOpportunity } from './types';

export const COLORS = {
  NONE: '#2E344D', // Uncolored
  PROPOSED: '#A7A9B2', // Cool Grey - Land proposed, no ambassador
  AMBASSADOR: '#D9A441', // Yellow/Gold
  SIGNED: '#F97316', // Orange
  DEVELOPMENT: '#3F5B4C', // Forest Green
  OPERATING: '#988ACF', // Pastel Purple
  
  BG: '#1E2233',
  TEXT: '#F2F2F2',
  TEXT_MUTED: '#C8CBD3'
};

export const MOCK_GLOBAL_STATS: GlobalStats = {
  totalDistributed: 124500, // $
  
  activeCountriesOccupancy: { name: 'Greece', value: 88, code: 'gr' },
  activeCountriesNights: { name: 'Spain', value: 1240, code: 'es' },
  
  activeCountriesStats: {
    development: 4, // e.g., Greece, Bulgaria + 2 others
    totalProposed: 14 // Total countries with some footprint
  },
  
  communityPoints: {
    weekly: { value: 1250, change: 12 }, // +12%
    monthly: { value: 5400, change: 8 }, // +8%
    allTime: { value: 45200, change: 150 } // +150 (absolute or just growth metric)
  },

  monthlyNightsGoal: {
    current: 8420,
    target: 10000
  }
};

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { id: '1', name: 'Elena Popova', country: 'Bulgaria', points: 4500, change: 120, avatarUrl: 'https://picsum.photos/50/50?random=1' },
  { id: '2', name: 'Marcus Weber', country: 'Germany', points: 4100, change: -50, avatarUrl: 'https://picsum.photos/50/50?random=2' },
  { id: '3', name: 'Sofia Rossi', country: 'Italy', points: 3850, change: 200, avatarUrl: 'https://picsum.photos/50/50?random=3' },
  { id: '4', name: 'John Smith', country: 'UK', points: 3200, change: 10, avatarUrl: 'https://picsum.photos/50/50?random=4' },
  { id: '5', name: 'Ana Silva', country: 'Portugal', points: 2900, change: 80, avatarUrl: 'https://picsum.photos/50/50?random=5' },
];

// Currency Rates relative to USD
export const CURRENCY_RATES: Record<string, number> = {
  'USD': 1,
  'EUR': 0.92,
  'SOL': 9.85, // Example rate
  'BTC': 0.000015, // Example rate
  'ETH': 0.00031
};

export const MOCK_USER_PROFILE: UserProfile = {
  name: "Admin User",
  avatarUrl: "https://picsum.photos/200/200?random=user",
  level: "Visionary Investor",
  totalPoints: 12450,
  nextLevelPoints: 15000,
  totalInvested: 85000,
  totalYearlyReturn: 9350,
  totalYearlyReturnPct: 11.2,
  remainingFreeNights: 14,
  investments: [
    {
      id: 'inv-1',
      name: 'Alpine Retreat Cabin',
      location: 'Julian Alps',
      country: 'Slovenia',
      image: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=400&auto=format&fit=crop',
      investmentSize: 45000,
      yearlyReturnVal: 5400,
      yearlyReturnPct: 12
    },
    {
      id: 'inv-2',
      name: 'Coastal Tiny Home',
      location: 'Peloponnese',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=400&auto=format&fit=crop',
      investmentSize: 40000,
      yearlyReturnVal: 3950,
      yearlyReturnPct: 9.8
    }
  ]
};

export const MOCK_OPPORTUNITIES: CabinOpportunity[] = [
  {
    id: 'opt-1',
    title: 'Forest Edge Eco-Cabin',
    images: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop'
    ],
    location: 'Transylvania',
    country: 'Romania',
    capacity: 4,
    amenities: ['Hot Tub', 'Fireplace', 'Smart Home', 'EV Charger'],
    tags: ['Forest View', 'Pet Friendly', 'Strong Wifi'],
    distanceFromCity: '45 min from Cluj-Napoca',
    totalPrice: 120000,
    availableSharesPct: 60,
    expectedRoiPct: 11.5
  },
  {
    id: 'opt-2',
    title: 'Lakeside Mirror House',
    images: [
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop'
    ],
    location: 'Lake Bled',
    country: 'Slovenia',
    capacity: 2,
    amenities: ['Private Dock', 'Sauna', 'Panorama Glass', 'Kayak'],
    tags: ['Lake View', 'Sunrise View', 'Romantic'],
    distanceFromCity: '30 min from Ljubljana',
    totalPrice: 180000,
    availableSharesPct: 25,
    expectedRoiPct: 9.8
  },
  {
    id: 'opt-3',
    title: 'River Canyon Lodge',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop'
    ],
    location: 'Tara Canyon',
    country: 'Montenegro',
    capacity: 6,
    amenities: ['Large Deck', 'BBQ Station', 'River Access', 'Starlink'],
    tags: ['Next to River', 'Kids Friendly', 'Nature Immersion'],
    distanceFromCity: '1.5h from Podgorica',
    totalPrice: 145000,
    availableSharesPct: 85,
    expectedRoiPct: 12.2
  },
  {
    id: 'opt-4',
    title: 'Tropical Jungle Dome',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f8e?q=80&w=600&auto=format&fit=crop'
    ],
    location: 'Ubud',
    country: 'Indonesia',
    capacity: 2,
    amenities: ['Infinity Pool', 'Jungle View', 'Yoga Deck', 'Scooter Incl.'],
    tags: ['Tropical', 'Sunset View', 'Wellness'],
    distanceFromCity: '1h from Denpasar',
    totalPrice: 95000,
    availableSharesPct: 40,
    expectedRoiPct: 13.5
  },
  {
    id: 'opt-5',
    title: 'Nordic Aurora Glass Igloo',
    images: [
      'https://images.unsplash.com/photo-1518182170546-0766ca6fdd69?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445548671936-e1ff8a6a6b20?q=80&w=600&auto=format&fit=crop'
    ],
    location: 'Rovaniemi',
    country: 'Finland',
    capacity: 2,
    amenities: ['Glass Roof', 'Private Sauna', 'Floor Heating', 'Reindeer Safari'],
    tags: ['Aurora View', 'Snow', 'Romantic'],
    distanceFromCity: '15 min from Airport',
    totalPrice: 165000,
    availableSharesPct: 15,
    expectedRoiPct: 10.2
  },
  {
    id: 'opt-6',
    title: 'Desert Oasis Tiny Home',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542324623-05c77e9b087d?q=80&w=600&auto=format&fit=crop'
    ],
    location: 'Joshua Tree',
    country: 'USA',
    capacity: 4,
    amenities: ['Fire Pit', 'Stargazing Deck', 'Outdoor Shower', 'Solar Power'],
    tags: ['Desert', 'Stargazing', 'Pet Friendly'],
    distanceFromCity: '2h from LA',
    totalPrice: 135000,
    availableSharesPct: 70,
    expectedRoiPct: 11.0
  }
];

// Specific Mock Ambassadors for demo consistency
const SPECIFIC_AMBASSADORS: Record<string, string> = {
  'BGR': 'Elena Popova',
  'AUT': 'Lukas Gruber',
  'ROU': 'Andrei Ionescu',
  'GRC': 'Nikos Papadopoulos',
  'SVN': 'Maja Novak',
  'ITA': 'Sofia Rossi',
  'MYS': 'Ahmad Bin Ali',
  'CYP': 'Eleni Christou',
  'FRA': 'Camille Dubois',
  'DEU': 'Marcus Weber',
  'GBR': 'Sarah Jenkins'
};

// Pre-defined status map based on user requirements
export const COUNTRY_STATUS_MAP: Record<string, CountryStatus> = {
  // In Development
  'BGR': CountryStatus.DEVELOPMENT, // Bulgaria

  // Land Signed
  'AUT': CountryStatus.SIGNED, // Austria

  // Ambassador
  'ROU': CountryStatus.AMBASSADOR, // Romania
  'GRC': CountryStatus.AMBASSADOR, // Greece
  'SVN': CountryStatus.AMBASSADOR, // Slovenia
  'ITA': CountryStatus.AMBASSADOR, // Italy
  'MYS': CountryStatus.AMBASSADOR, // Malaysia
  'CYP': CountryStatus.AMBASSADOR, // Cyprus
  
  // Keeping existing ones for richness if not conflicting
  'FRA': CountryStatus.AMBASSADOR, 
  'DEU': CountryStatus.AMBASSADOR, 
  'GBR': CountryStatus.AMBASSADOR, 

  // Land Proposed
  'LTU': CountryStatus.PROPOSED, // Lithuania
  'POL': CountryStatus.PROPOSED, // Poland
  'JPN': CountryStatus.PROPOSED, // Japan
  
  // Defaults/Previous (Optional, can be cleared if strict adherence needed)
  'USA': CountryStatus.NONE,
  'TUR': CountryStatus.NONE, 
  'HRV': CountryStatus.NONE,
};

// Helper to generate mock country data
export const getMockCountryData = (id: string, name: string, status: CountryStatus): CountryData => {
  
  // Try to find Alpha-3 code based on status map reverse lookup or passed ID if it is alpha-3
  // Ideally we pass alpha-3 to this function. Assuming ID might be numeric or alpha-3.
  // For the sake of the "specific ambassador" lookup, we'll try to match the ID against keys in SPECIFIC_AMBASSADORS
  // In a real app, ID is consistent. Here we might rely on the 'id' being passed from WorldMap which is handled there.
  
  let progress = 0;
  let hasAmbassador = false;
  let locationsProposed = Math.floor(Math.random() * 10);
  const locationsTarget = 10;
  let architectsRecommended = Math.floor(Math.random() * 3);
  const architectsTarget = 3;
  let lawyerRecommended = Math.random() > 0.5;

  // Logic based on specific status requirements
  switch (status) {
    case CountryStatus.OPERATING:
      progress = 100;
      hasAmbassador = true;
      locationsProposed = 10;
      architectsRecommended = 3;
      lawyerRecommended = true;
      break;
    case CountryStatus.DEVELOPMENT:
      // Around 60% ready
      progress = 60 + Math.floor(Math.random() * 10); 
      hasAmbassador = true;
      locationsProposed = 8;
      break;
    case CountryStatus.SIGNED:
      // Contract signed - 30%
      progress = 30;
      hasAmbassador = true;
      break;
    case CountryStatus.AMBASSADOR:
      // Ambassador selected - 20%
      progress = 20;
      hasAmbassador = true;
      break;
    case CountryStatus.PROPOSED:
      // Land proposed only (no ambassador)
      // Progress depends on requirements, but let's give it a boost because of land
      locationsProposed = 5 + Math.floor(Math.random() * 3); // Guaranteed some locations
      hasAmbassador = false;
      break;
    case CountryStatus.NONE:
    default:
      // W/O ambassador: progress depends on completed requirements
      hasAmbassador = false;
      break;
  }

  // If no fixed progress (NONE or PROPOSED), calculate based on tasks
  if (status === CountryStatus.NONE || status === CountryStatus.PROPOSED) {
    const locScore = (locationsProposed / locationsTarget) * 40;
    const archScore = (architectsRecommended / architectsTarget) * 40;
    const lawyerScore = lawyerRecommended ? 20 : 0;
    progress = Math.round(locScore + archScore + lawyerScore);
    // Cap if needed, but max is 100
  }

  // Determine Ambassador Name
  let ambassadorData = undefined;
  if (hasAmbassador) {
    // Check if we have a specific name for this country code (id)
    const specificName = SPECIFIC_AMBASSADORS[id] || SPECIFIC_AMBASSADORS[Object.keys(COUNTRY_STATUS_MAP).find(key => COUNTRY_STATUS_MAP[key] === status && key === id) || ''];
    
    ambassadorData = {
      id: `amb-${id}`,
      name: specificName || `Ambassador of ${name}`,
      avatarUrl: `https://picsum.photos/60/60?random=${id}`,
      joinedDate: '2024-01-15',
      contributionPoints: 1250
    };
  }

  return {
    id,
    name,
    status,
    progress,
    description: `Expanding to the stunning landscapes of ${name} with rich history and local charm.`,
    locationsProposed,
    locationsTarget,
    architectsRecommended,
    architectsTarget,
    lawyerRecommended,
    ambassadorApplications: Math.floor(Math.random() * 5),
    ambassadorTarget: 5,
    hospitalityPartner: Math.random() > 0.5,
    contentCreators: Math.floor(Math.random() * 2),
    contentCreatorsTarget: 2,
    mediaPartners: Math.random() > 0.7,
    b2bClients: Math.floor(Math.random() * 3),
    b2bClientsTarget: 3,
    ambassador: ambassadorData
  };
};