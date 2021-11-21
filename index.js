var n = 5; 
var pattern = "";

for(var i = 0; i < n; i++) { 
  for(var j = 0; j < n; j++) { 
    pattern += " * ";
  }
  pattern += "\n";
}
console.log(pattern);
