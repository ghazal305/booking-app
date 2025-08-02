import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://booking-app-db.vercel.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.config.url, response.status);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.status, error.message);
    
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      console.error('Server error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network error: No response received');
    } else {
      // Something else happened
      console.error('Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API endpoints
export const apiEndpoints = {
  bestOffers: '/best_offer',
  recommendedHotels: '/recommended_hotels',
  allHotels: '/hotels',
  hotelDetails: (id) => `/hotels/${id}`,
  searchHotels: (query) => `/hotels/search?q=${encodeURIComponent(query)}`,
  searchHotelsByCountry: (countryCode) => `/hotels?address.countryIsoCode=${countryCode}`,
  popularHotels: '/hotels/popular',
  featuredHotels: '/hotels/featured',
};

// API service functions
export const apiService = {
  // Get best offers
  getBestOffers: async () => {
    const response = await api.get(apiEndpoints.bestOffers);
    return response.data.value || response.data;
  },

  // Get recommended hotels
  getRecommendedHotels: async () => {
    const response = await api.get(apiEndpoints.recommendedHotels);
    return response.data.value || response.data;
  },

  // Get all hotels
  getAllHotels: async () => {
    const response = await api.get(apiEndpoints.allHotels);
    return response.data.value || response.data;
  },

  // Get hotel details by ID
  getHotelDetails: async (id) => {
    const response = await api.get(apiEndpoints.hotelDetails(id));
    return response.data.value || response.data;
  },

  // Search hotels
  searchHotels: async (query) => {
    const response = await api.get(apiEndpoints.searchHotels(query));
    return response.data.value || response.data;
  },

  // Search hotels by country
  searchHotelsByCountry: async (countryCode) => {
    const response = await api.get(apiEndpoints.searchHotelsByCountry(countryCode));
    return response.data.value || response.data;
  },

  // Get popular hotels
  getPopularHotels: async () => {
    const response = await api.get(apiEndpoints.popularHotels);
    return response.data.value || response.data;
  },

  // Get featured hotels
  getFeaturedHotels: async () => {
    const response = await api.get(apiEndpoints.featuredHotels);
    return response.data.value || response.data;
  },
};

export default api; 