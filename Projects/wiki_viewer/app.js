
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
      for (var i = 0; i < response[1].length; i++){
        $('.results-list').append('<div><a href="' + response[3][i] + '" target = "_blank"><li><h5>' + response[1][i] + '</h5><p>' + response[2][i] + '</p></li></a></div>');
      }
    }

    fetch(wikiTwo)
      .then(function (response){
        console.log(response);
        response.json().then((data) => {
          console.log('Fetch data: ', data);
          console.log('Fetch More data: ', data[1]);
          renderHTML(data);
        });
      })
      .catch(function (err) {
        console.error('error: ', err);
      });
/*
    axios.get(wikiTwo)
      .then(function (response) {
        console.log('Axios Success!');
        console.log('Axios Response: ', response);
        console.log(response.data);
        renderHTML(response.data);
      })
      .catch(function(err){
        console.log('Axios Error: ', err);
      });
*/
  }
});
