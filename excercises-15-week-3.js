function groupAnimals(animals) {
  // you can only write your code here!
  // animals.sort();
  var arr = [];
  var arrUnik = []
  var pembanding = animals[0][0];
  var arrBox = [];

  for ( var j=0; j < animals.length; j++) {
    arr.push(animals[j].charAt(0))
    // console.log(arr)
  }
  //loop arr, non Unik
  var hurufUnik =''
  arr.sort()
  arrUnik.push(arr[0])
    for ( var k = 1; k < arr.length-1; k++) {
      if (arr[0] !== arr[k]) {
        arrUnik.push(arr[k])
      }    
     } //console.log(arrUnik, k)
  //looping animalas yg sesuai arrUnik
  for (var i =0; i < arrUnik.length; i++) {
     arrBox.push([])
    for ( var j = 0; j < animals.length; j++) {
      if ( arrUnik[i] === animals[j][0]) {
        arrBox[i].push(animals[j])
      }
    }

  } 
 
  return arrBox;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]