// 1. Can search Wikipedia entries in a search box and see a list of results
// 2. Can click a button to see a random wikipedia entry

var root = "https://randomuser.me/api/";

/*
fetch(root)
  .then(function (response) {
    console.log(response.json());
    console.log('Success:');
    console.log(response);
  })
  .catch(function (err) {
    console.error('error: ', err);
  });
*/

axios.get(root)
  .then(function (response) {
    console.log('Axios Success!');
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });
