// Melakukan Looping Data Array - E3W3

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
/* OUTPUT
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca 
...
*/
function dataHandling(par) {
  var hasil='';
  for(var i=0; i<par.length; i++) {
    for(var j=0; j<par[i].length; j++) {
      switch (j) {
        case 0: 
          hasil+='Nomor ID: '+ par[i][j]+'\n';
          break;
        case 1:
          hasil+='Nama Lengkap: '+ par[i][j]+'\n';
          break;
        case 2:
          hasil+='TTL: '+ par[i][j]+' '+ par[i][j+1]+'\n';
          break;
        case 4:
          hasil+='Hobi: '+ par[i][j]+'\n\n';
          break;
      }
      
    }
  }
 return hasil;
}

console.log(dataHandling(input))