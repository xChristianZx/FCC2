// see github for more ELEGANT solutions
function translatePigLatin(str) {
 // set regExp to vowels case-insensitive
  var regExp = /[a,e,i,o,u]/gi;
  // if first letter is a vowel then this
  if (regExp.test(str.charAt(0))) {
     return str.concat('way');

  } else {
    // this counts the number of consonants until a vowel is found
    var vowelIndice = str.indexOf(str.match(regExp)[0]);
    // takes the str from the first vowel match + the beginning consonants + 'ay'
    return str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
}

translatePigLatin("consonant");
// if charAt(0) = /a,e,i,o,u/ => charAt(0) => to the end of the string + way
// if charAt (0,1) = consonant + consonant => to end of string + ay
// if charAt(0,1) = consonant + vowel => consonant to end + ay
