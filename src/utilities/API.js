import axios from "axios";

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const baseURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
const apiKey = 'RGAPI-61aaf06c-44d3-4102-b217-80a72c2c6dce';
const urlPath = corsAnywhere + baseURL + apiKey;
const userName = 'kDurg'

export default {
  search: function(query) {
    return axios.get(urlPath);
  },
  

}

