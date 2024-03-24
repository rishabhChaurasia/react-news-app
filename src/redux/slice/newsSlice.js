import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestNews: null,
  politicalNews: null,
  sportsNews: null,
  scienceNews: null,
  entertainmentNews: null,
  healthNews: null,
  styleNews: null,
  techNews: null,
  generalNews: null,
  travelNews: null,
  businessNews: null,
  currentDate: null,

  latestNewsLoading: false,
  politicalNewsLoading: false,
  sportsNewsLoading: false,
  scienceNewsLoading: false,
  entertainmentNewsLoading: false,
  healthNewsLoading: false,
  styleNewsLoading: false,
  techNewsLoading: false,
  generalNewsLoading: false,
  travelNewsLoading: false,
  businessNewsLoading: false,

  latestNewsError: null,
  politicalNewsError: null,
  sportsNewsError: null,
  scienceNewsError: null,
  entertainmentNewsError: null,
  healthNewsError: null,
  styleNewsError: null,
  techNewsError: null,
  generalNewsError: null,
  travelNewsError: null,
  businessNewsError: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getLatestNewsStart: (state) => {
      state.latestNewsLoading = true;
      state.latestNewsError = null;
    },
    getLatestNewsSuccess: (state, action) => {
      state.latestNewsLoading = false;
      state.latestNews = action.payload;
      state.currentDate = new Date().getDate();
      state.latestNewsError = null;
    },
    getLatestNewsError: (state, action) => {
      state.latestNewsLoading = false;
      state.latestNewsError = action.payload;
    },
    getPoliticalNewsStart: (state) => {
      state.politicalNewsLoading = true;
      state.politicalNewsError = null;
    },
    getPoliticalNewsSuccess: (state, action) => {
      state.politicalNewsLoading = false;
      state.politicalNews = action.payload;
      state.currentDate = new Date().getDate();
      state.politicalNewsError = null;
    },
    getPoliticalNewsError: (state, action) => {
      state.politicalNewsLoading = false;
      state.politicalNewsError = action.payload;
    },
    getHealthNewsStart: (state) => {
      state.healthNewsLoading = true;
      state.healthNewsError = null;
    },
    getHealthNewsSuccess: (state, action) => {
      state.healthNewsLoading = false;
      state.healthNews = action.payload;
      state.currentDate = new Date().getDate();
      state.healthNewsError = null;
    },
    getHealthNewsError: (state, action) => {
      state.healthNewsLoading = false;
      state.healthNewsError = action.payload;
    },
    getSportsNewsStart: (state) => {
      state.sportsNewsLoading = true;
      state.sportsNewsError = null;
    },
    getSportsNewsSuccess: (state, action) => {
      state.sportsNewsLoading = false;
      state.sportsNews = action.payload;
      state.currentDate = new Date().getDate();
      state.sportsNewsError = null;
    },
    getSportsNewsError: (state, action) => {
      state.sportsNewsLoading = false;
      state.sportsNewsError = action.payload;
    },
    getScienceNewsStart: (state) => {
      state.scienceNewsLoading = true;
      state.scienceNewsError = null;
    },
    getScienceNewsSuccess: (state, action) => {
      state.scienceNewsLoading = false;
      state.scienceNews = action.payload;
      state.currentDate = new Date().getDate();
      state.scienceNewsError = null;
    },
    getScienceNewsError: (state, action) => {
      state.scienceNewsLoading = false;
      state.scienceNewsError = action.payload;
    },
    getEntertainmentNewsStart: (state) => {
      state.entertainmentNewsLoading = true;
      state.entertainmentNewsError = null;
    },
    getEntertainmentNewsSuccess: (state, action) => {
      state.entertainmentNewsLoading = false;
      state.entertainmentNews = action.payload;
      state.currentDate = new Date().getDate();
      state.entertainmentNewsError = null;
    },
    getEntertainmentNewsError: (state, action) => {
      state.entertainmentNewsLoading = false;
      state.entertainmentNewsError = action.payload;
    },
    getBusinessNewsStart: (state) => {
      state.businessNewsLoading = true;
      state.businessNewsError = null;
    },
    getBusinessNewsSuccess: (state, action) => {
      state.businessNewsLoading = false;
      state.businessNews = action.payload;
      state.currentDate = new Date().getDate();
      state.businessNewsError = null;
    },
    getBusinessNewsError: (state, action) => {
      state.businessNewsLoading = false;
      state.businessNewsError = action.payload;
    },
    getTechNewsStart: (state) => {
      state.techNewsLoading = true;
      state.techNewsError = null;
    },
    getTechNewsSuccess: (state, action) => {
      state.techNewsLoading = false;
      state.techNews = action.payload;
      state.currentDate = new Date().getDate();
      state.techNewsError = null;
    },
    getTechNewsError: (state, action) => {
      state.techNewsLoading = false;
      state.techNewsError = action.payload;
    },
    getGeneralNewsStart: (state) => {
      state.generalNewsLoading = true;
      state.generalNewsError = null;
    },
    getGeneralNewsSuccess: (state, action) => {
      state.generalNewsLoading = false;
      state.generalNews = action.payload;
      state.currentDate = new Date().getDate();
      state.generalNewsError = null;
    },
    getGeneralNewsError: (state, action) => {
      state.generalNewsLoading = false;
      state.generalNewsError = action.payload;
    },
  },
});

export const {
  getLatestNewsStart,
  getLatestNewsSuccess,
  getLatestNewsError,
  getPoliticalNewsStart,
  getPoliticalNewsSuccess,
  getPoliticalNewsError,
  getHealthNewsStart,
  getHealthNewsSuccess,
  getHealthNewsError,
  getSportsNewsStart,
  getSportsNewsSuccess,
  getSportsNewsError,
  getScienceNewsStart,
  getScienceNewsSuccess,
  getScienceNewsError,
  getEntertainmentNewsStart,
  getEntertainmentNewsSuccess,
  getEntertainmentNewsError,
  getBusinessNewsStart,
  getBusinessNewsSuccess,
  getBusinessNewsError,
  getTechNewsStart,
  getTechNewsSuccess,
  getTechNewsError,
  getGeneralNewsStart,
  getGeneralNewsSuccess,
  getGeneralNewsError,
} = newsSlice.actions;

export default newsSlice.reducer;
