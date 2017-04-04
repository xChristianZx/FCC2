// 1. Can search Wikipedia entries in a search box and see a list of results
// 2. Can click a button to see a random wikipedia entry

//for running in node/terminal
// cannot run require as it is a server-side node/ common js method
// instead of a browser method
//var axios = require('axios');

$(document).ready(function(){

  //Click listener
  $('#search-button').click(runSearch);

  //keypress listener
  $('#search-form').keypress(function(event){
    if (event.which == 13) {
      event.preventDefault();
      runSearch();
    }
  });

  function runSearch() {
    var searchItem = $('#search-form').val();

    //using query
    const wiki = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json";

    //Using opensearch
    const wikiTwo = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchItem + '&format=json&origin=*';

    function renderHTML(response) {
      $('.results-list').html('');
      for (var i = 0; i < response.data[1].length; i++){
        $('.results-list').append('<div><a href="' + response.data[3][i] + '" target = "_blank"><li><h5>' + response.data[1][i] + '</h5><p>' + response.data[2][i] + '</p></li></a></div>');
      }
    }
/*
    fetch(wikiTwo)
      .then(function (response){
        //console.log(response);
        //console.log(response.json());
        response.json().then((data) => {
          console.log('Fetch data: ', data);
          console.log('Fetch More data: ', data[1]);
          renderHTML(data);
        })
      })
      .then(function (data) {
        data.forEach(function (element) {
          console.log(element);

        })
      })
      .catch(function (err) {
        console.error('error: ', err);
      });
*/

    axios.get(wikiTwo)
      .then(function (response) {
        console.log('Axios Success!');
        console.log('Axios Response: ', response);

        //json.forEach(function(e){console.log(e);})
        console.log(response.data);

        //console.log("AXIOS JSON:", json);
        console.log(response.data[0]);
        console.log(response.data[1][0]);
        console.log(response.data[2][0]);
        console.log(response.data[3][0]);
        renderHTML(response);
      })
      //.then(function(){console.log('TESTING:', json);})
      .catch(function(err){
        console.log('Axios Error: ', err);
      });

  }

});
