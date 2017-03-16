var quotes = [
  {
    quote: "I'm a Rocketman",
    author: "Elton John",
  },
  {
    quote: 'There is no passion to be found playing small, in settling for a life that is less than the one you are capable of living.',
    author: "Nelson Mandela",
  },
  {
    quote: 'Whether you think you can or ou think you can\'t, -- you\'re right.',
    author: 'Henry Ford'
  },
  {
    quote: 'Yo, ADRIENNE!',
    author:'Rocky Balboa',
  },
  {
    quote: 'You better check yo self, before you rickity wreck yo self!',
    author: 'Ice Cube',
  },
  {
    quote: 'The journey is the reward',
    author: 'Steve Jobs'
  }
]

//This generates the randomness
var randomAuthor, randomQuote, currentQuote;

function random(){

  let min = 0;
  let max = quotes.length;

  var randomNum = (function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }(min, max));

  randomAuthor = quotes[randomNum].author;
  randomQuote = quotes[randomNum].quote;

  return currentQuote = `"${quotes[randomNum].quote}"\n - ${quotes[randomNum].author}`;

}
console.log(random());

console.log('2. ' + randomAuthor);
console.log("This is " + currentQuote);

//generates quote to screen upon onclick
function myQuote() {
  //find better way to execute random()
   document.getElementById("quotescreen").innerHTML = random();
   document.getElementById("quotescreen").innerHTML = `"${randomQuote}"`;
}

function myAuthor() {
  document.getElementById("author-box").innerHTML = `${randomAuthor}`;
}

$(document).ready(function() {
			$("#tweetit").click(function() {
window.open("https://twitter.com/intent/tweet?&text=" + encodeURIComponent(currentQuote));
	 });
});
