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
      if (event.which == 13) {return runSearch();}
    });

  function runSearch() {
    var searchItem = $('#search-form').val();

    //using query
    const wiki = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json";

    //Using opensearch
    const wikiTwo = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchItem + '&format=json&origin=*';

    function renderHTML(response) {
    /*
      $('.results-list').append('<li><h4>Search results for: "' + response.data[0] + '"</h4></li>');
      $('.results-list').append('<li><h5>' + response.data[1][0] + '</h5></li>');
      $('.results-list').append('<li><p>' + response.data[2][0] + '</p></li>');
      $('.results-list').append('<li><a href="' + response.data[3][0] + '" target = "_blank">' + response.data[3][0] + '</a></li>');
      $('.results-list').append('<div><li><h5>' + response.data[1][0] + '</h5><p>' + response.data[2][0] + '</p></li></div>');
    */
      for (var i = 0; i < response.data[1].length; i++){
        $('.results-list').append('<div><a href="' + response.data[3][i] + '" target = "_blank"><li><h5>' + response.data[1][i] + '</h5><p>' + response.data[2][i] + '</p></li></a></div>');
      }
    }

    function renderHTML2(response) {
      var data = response.data;
      data.forEach(data, function (element, index, array) {
        //$('.results-list').append('<li><p>' + element[2][index] + '</p></li>');
        console.log('I AM HERE: ', data[1] );
      });
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

var json;
var dataNames, dataDescription, dataUrl;

    axios.get(wikiTwo)
      .then(function (response) {
        console.log('Axios Success!');
        console.log('Axios Response: ', response);

        json = JSON.stringify(response.data);
        dataNames = response.data[1];
        dataDescription = response.data[2];
        dataUrl = response.data[3];

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
        console.log(err);
      });

  }

});
