// 1. see weather in current location
// 2. different icon or background image for the type of weather
// 3. toggle between Fahrenheit and Celsius

$(document).ready(function(){
//API Call to get user location

  const apiKey = "be12c9cede78dacab40103d7c20d67fb";

  function getUserInfo(){
  //Get user location via IP address
    $.getJSON("http://ip-api.com/json", function(json){
      var currentLat = json.lat;
      var currentLong = json.lon;
      var city = json.city;
      var state = json.region;

      var apiCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + currentLat + "&lon=" + currentLong + "&units=imperial" + "&APPID=be12c9cede78dacab40103d7c20d67fb";
/*
// fetch() testing
      fetch(apiCall)
      .then((response)=> {
        console.log();
        console.log("Fetch Status: ", response.status);
        response.json().then((data) => {console.log('fetch: ',data.name);})

      })
      .catch(err => {console.log(err);});
*/
  //API Call to Openweathermap
      axios.get(apiCall)
        .then(function (response) {
          console.log('API Call: Success', response);
          renderHTML(response);
        })
        .catch(function (error) {
          console.log('API Call: Failed');
          console.log(error);

      });
    });
  }
  getUserInfo();
});


//HTML Rendering
function renderHTML (response){

  var currentTemp = response.data.main.temp;
  console.log("this is temp", currentTemp);

  var currentFar = farRound(currentTemp);
  var currentCels = celsConvert(currentTemp);
    // Temp Conversions
  function farRound(temp){
      return Math.floor(temp);
    }

  function celsConvert (temp){
      return Math.floor((temp - 32) * (5/9));
    }

  console.log("These are the degs", currentFar+'F', currentCels+'C');

//html rendering
  $('#city').html(response.data.name);
  $('#temp').html(currentFar + "&#176 F");
  $('#desc').html(response.data.weather[0].main);
  $('#icon-id').html(response.data.weather[0].id);

//F/C unit toggle
//EXPLANATION: As I click the button, it toggles between
//adding and removing the class units-toggle-on.
//as it does this, hasClass checks each time and switches between the two

  $('body').click(function(){
    $('.templine').toggleClass('units-toggle-on');
    if($('.templine').hasClass('units-toggle-on')) {
      $('#temp').html(currentFar + "&#176 F");
    } else {
      $('#temp').html(currentCels + "&#176 C");
    }
  });


getIcon(response);

}

// Weather Icon ID number

function getIcon (response){
  var icon;
  var currentIconNumber = response.data.weather[0].id;
  console.log('currentIconNumber: ', currentIconNumber);

  function indexer (val){
    if (val > 800) {
      switch (val) {
        case 800:
          icon = 'wi-day-sunny';
          break;
        case 802:
        case 803:
        case 804:
          icon = 'wi-cloudy';
          break;
        case 900:
          icon = 'wi-tornado';
          break;
        case 901:
        case 902:
        case 962:
          icon = 'wi-hurricane';
          break;
        case 905:
          icon = 'wi-windy';
          break;
        default:
          icon = 'wi-cloudy';
      }
    } else {
    //Simplifies the icon number by the first character so that it is
    //easier to display weather icons according to icon number
      var iconIndex = val.toString().charAt(0);

      console.log('TASTY says:', iconIndex);

      switch (iconIndex) {
        case '2':
          //This will be thunderstorms
          icon = 'wi-thunderstorm';
          break;
        case '3':
          //Drizzle
          icon = 'wi-sprinkle';
          break;
        case '5':
          //Rain
          icon = 'wi-rain';
          break;
        case '6':
          //Snow
          icon = 'wi-snow';
          break;
        case '7':
          //Atmosphere - Fog
          icon = 'wi-fog';
          break;
        case '8':
        //clear
          icon  = 'wi-day-sunny';
          break;
        default:
        //Clouds for the default
          icon = 'wi-cloudy';
          break;
      }
    }
  }
  indexer(currentIconNumber);

  $('#weather-icon').html('<i class = "wi ' + icon + '"></i>');
  console.log('CHECK THE ICON Variable', icon);
}
