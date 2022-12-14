import axios from "axios";

const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};