
function order(words){
  if(!words) {
    return "";
  } else {
    var ar = words.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    var n, nar = [];
    ar.forEach(function(i) {
      n = parseInt(i.match(/\d+/)[0]);
      //console.log(n + " " + i);
      //nar.splice(n-1, 0, i);  //splice not work for this case cuz if not found specific index it will be last index (check by console.log)
      nar[n] = i;
      //console.log(nar);
    });
    return nar.join(" ").trim();
  }
}

//same result took from Solution
function orderX(words) {
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ').trim();
}

//traverse array one time
function orderY(words){
  return words
  .split(' ')
  .reduce((prev, next) => {
    let idx = next.match(/\d+/i);
    idx = idx ? idx[0] : -1;
    prev[idx - 1] = next;
    return prev;
  }, [])
  .join(' ');
}

var w = "is2 Thi1s T4est 3a";
var u = "th5e Fo1r the2 4of g3ood pe6ople ";
console.log(order(w));
console.log(orderX(u));
console.log(orderY(u));