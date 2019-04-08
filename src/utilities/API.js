import axios from "axios";

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const apiKey = 'RGAPI-61aaf06c-44d3-4102-b217-80a72c2c6dce';

export default {
  getSummonerID: function(input) {
    const userName = input;
    const baseURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
    const summonerByName = corsAnywhere + baseURL + apiKey;

    axios.get(summonerByName)
      .then(function (response) {
        console.log(response)
      })
      .catch (function(err) {
        console.log(err)
      })
  },
  

}

