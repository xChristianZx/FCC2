// 1. Can search Wikipedia entries in a search box and see a list of results
// 2. Can click a button to see a random wikipedia entry

//for running in node/terminal
// cannot run require as it is a server-side node/ common js method
// instead of a browser method
//var axios = require('axios');

const root = "https://randomuser.me/api/";

const wiki = "https://en.wikipedia.org/wiki/"

//var searchResults = document.querySelector('.search-results');

fetch(root)
  .then(function (response){
    //console.log(response);
    //console.log(response.json());
    response.json().then((data) => {
      console.log('Fetch data: ', data);
      console.log('More data: ', data.results[0]);
      renderHTML(data);
    });
  })
  .catch(function (err) {
    console.error('error: ', err);
  });

function renderHTML(response) {
  $('.search').html(response.results[0]);
}


/*
axios.get(root)
  .then(function (response) {
    console.log('Axios Success!');
    console.log(response);

    var json = JSON.stringify(response.data.results[0]);
    console.log(response.data.results[0]);
    console.log("json:", json);
  })
  .catch(function(err){
    console.log(err);
  });
*/
