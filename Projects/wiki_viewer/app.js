// 1. Can search Wikipedia entries in a search box and see a list of results
// 2. Can click a button to see a random wikipedia entry

//for running in node/terminal
// cannot run require as it is a server-side node/ common js method
// instead of a browser method
//var axios = require('axios');

//Random User test API
const root = "https://randomuser.me/api/";

//using query
const wiki = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json";

//Using opensearch
const wikiTwo = `https://en.wikipedia.org/w/api.php?action=opensearch&search=apple&format=json&origin=*`;

//var searchResults = document.querySelector('.search-results');

fetch(wikiTwo)
  .then(function (response){
    //console.log(response);
    //console.log(response.json());
    response.json().then((data) => {
      console.log('Fetch data: ', data);
      console.log('More data: ', data[1]);
      renderHTML(data);
    });
  })
  .catch(function (err) {
    console.error('error: ', err);
  });

function renderHTML(response) {
  $('.search-results').html(response[0]);
}



axios.get(wikiTwo)
  .then(function (response) {
    console.log('Axios Success!');
    console.log('Response: ', response);

    var json = JSON.stringify(response.data);
    console.log(response.data);
    console.log("json:", json);
  })
  .catch(function(err){
    console.log(err);
  });
