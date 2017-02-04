function convertHTML(str) {
var re = {
     '&' : "&amp;",
     '<' : "&lt;",
     '>' : "&gt;",
     '\"' : "&quot;",
     '\'' : "&apos;",
   };
  return str.replace(/[&<>"']/g, function (match){
    return re[match];
  });
}

convertHTML("Dolce & Gabbana");
//create object with regexp key's and values
