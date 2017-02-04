function uniteUnique(arr) {
  var args = [...arguments];
  // sames as var args = Array.prototype.slice.call(arguments);
  var result = [];
  args.reduce(function(a, b){
    return a.concat(b);
    //reduces all 3 arrays down to 1;
  }).forEach(function(item){
    //checks for each item that it is not in the results array;
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  })

  return result;

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// all methods return new arrays
// filter()
// map()
// sort()
// concat()

function uniteUnique2(arr) {
  var args = [...arguments];
  // sames as var args = Array.prototype.slice.call(arguments);

  return args.reduce(function(arr1, arr2){
    return arr1.concat(arr2.filter(function(item){
      return arr1.indexOf(item) < 0;
    }));

  });
}

console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));
