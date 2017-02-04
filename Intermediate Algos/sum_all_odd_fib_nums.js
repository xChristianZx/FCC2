function sumFibs(num) {
  var arr = [1];
  // i <= num less than or equal to so that if num is a fib number it can be accepted
  for (var i = 1; i <= num;){
    arr.push(i);
    //instead of i counting sequentially, this makes it so that it uses the
    //previous 2 fib numbers in the array via their array[index];
    // which also accounts for the lack of i++;
    i = arr[arr.length - 1] + arr[arr.length - 2];
  }

  var results = arr.reduce(function(prev, curr){
    if (curr%2 !== 0) {
      return prev + curr;
    } else {
      return prev;
    }
  });


  console.log(arr);
  console.log(results);
  return results;
}
sumFibs(75025);
