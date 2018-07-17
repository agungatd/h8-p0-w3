function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  var arr = [];
  var pembanding = animals[0][0];
  var arrBox = [];
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === pembanding) {
      arrBox.push(animals[i]);
    } else {
      arr.push(arrBox);
      arrBox = [];
      pembanding = animals[i][0];
      arrBox.push(animals[i]);
    }
    if (i === animals.length-1) {
      arr.push(arrBox);
    }
  }
  return arr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]