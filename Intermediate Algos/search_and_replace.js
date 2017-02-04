function myReplace(str, before, after) {
  //1. Declare regExp condition - Where the first letter is capitalized
  var regExp = /^[A-Z]/;
  //2. Using regExp.test(), we check to see if the before statement matches our regExp condition
  if (regExp.test(before)){
    after = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, after);
  } else {
        return str.replace(before, after);
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
