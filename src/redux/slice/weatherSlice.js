import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherLoading: false,
  weatherData: null,
  weatherError: null,
  postalCode: null,
  postalCodeLoading: false,
  geoLocation: null,
  geoLocationError: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherStart: (state) => {
      state.weatherLoading = true;
      state.weatherData = null;
      state.weatherError = null;
    },
    getWeatherSuccess: (state, action) => {
      state.weatherLoading = false;
      state.weatherData = action.payload;
      state.weatherError = null;
    },
    getWeatherFailure: (state, action) => {
      state.weatherLoading = false;
      state.weatherError = action.payload;
    },
    getPostalCodeStart: (state) => {
      state.postalCodeLoading = true;
      state.postalCode = null;
    },
    getPostalCodeData: (state, action) => {
      state.postalCode = action.payload;
      state.postalCodeLoading = false;
    },
    getGeoLocation: (state, action) => {
      state.geoLocation = action.payload;
    },
    getGeoLocationError: (state, action) => {
      state.geoLocationError = action.payload;
    },
  },
});

export const {
  getWeatherStart,
  getWeatherSuccess,
  getWeatherFailure,
  getPostalCodeData,
  getPostalCodeStart,
  getGeoLocation,
  getGeoLocationError,
} = weatherSlice.actions;

export default weatherSlice.reducer;
