// Mengakses Nilai Dalam Array - E2W3

function balikString(word) {
  var lettr = '';
  for (var i = word.length-1; i>=0; i--) {
    lettr += word[i];
  }
  return lettr;
}

console.log(balikString('hello world!'));//input