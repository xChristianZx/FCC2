
function diffArray(arr1, arr2) {
return arr1.filter(function(value){return arr2.indexOf(value) === -1;}).concat(
    arr2.filter(function(value){return arr1.indexOf(value) === -1;}));

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/
