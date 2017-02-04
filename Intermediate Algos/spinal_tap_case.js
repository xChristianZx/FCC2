function spinalCase(str) {

  //regExp expresses any whitespace or underscore same as /[' '_]/g
  const regExp = /\s+|_+/g;

  //replace() takes the regex order of lowercaseUppercase and seperates the two
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  //this replaces
  return str.toLowerCase().replace(regExp, '-');
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
// toLowerCase()
// regExp
//replace within a replace
