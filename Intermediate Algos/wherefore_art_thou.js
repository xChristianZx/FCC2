function whatIsInAName(collection, source) {

   var sourceKeys = Object.keys(source);

 return collection.filter(function(item){return sourceKeys.every(function(key){return item[key] === source[key];});});

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
