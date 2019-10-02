// import axios from "axios";

// const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
// const apiKey = 'RGAPI-3b16db0a-768b-455a-87b0-1fe9e19cf969';

// export default {
//   getSummonerID: function(input, updateState) {
//     const userName = input;
//     const baseURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + userName + '?api_key='
//     const summonerByName = corsAnywhere + baseURL + apiKey;
//     console.log('what is the updateState?', updateState);

//     axios.get(summonerByName)
//       .then(function (response) {
//         // (response) => updateState(response);
//         console.log(response)
//       })
//       .catch (function(err) {
//         console.log(err)
//       })
//   }
// }