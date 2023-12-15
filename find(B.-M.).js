function BadTable(pattern) {
  const table = {};
  let patternl = pattern.length;
  for (let i = 0; i < patternl - 1; i++) {
    table[pattern[i]] = patternl - i - 1;
  }
  return table;
}

function searchstring(text, pattern) {
  let textl = text.length;
  let patternl = pattern.length;
  var bad = BadTable(pattern);
  let shift = 0;
  while (shift <= textl - patternl) {
    let index = patternl - 1;
    while (index >= 0 && pattern[index] === text[shift + index]) {
      index--;
    }
    if (index === -1) {
      return shift;
    }
    const badshift = bad[text[shift + index]] || patternl;
    shift += badshift;
  }
  return -1; 
}

var text = "abbbcbcacabbbabbcba";
var pattern = "abbc";
let i = searchstring(text, pattern);
if (i !== -1) {
  console.log("Подстрока найдена в позиции");
  console.log(i);
} 
else {
  console.log("Подстрока не найдена");
}