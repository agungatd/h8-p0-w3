var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

/* */
function dataHandling2(par) {
  //output1
  par.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  par.splice(4,1,"Pria", "SMA Internasional Metro");

  console.log(par);
  //output2
  var bln=par[3].split('/');
  switch (bln[1]) {
    case '01': bln[1]='Januari'; break;
    case '02': bln[1]='Februari'; break;
    case '03': bln[1]='Maret'; break;
    case '04': bln[1]='April'; break;
    case '05': bln[1]='Mei'; break;
    case '06': bln[1]='Juni'; break;
    case '07': bln[1]='Juli'; break;
    case '08': bln[1]='Agustus'; break;
    case '09': bln[1]='Septermber'; break;
    case '10': bln[1]='Oktober'; break;
    case '11': bln[1]='November'; break;
    case '12': bln[1]='Desember'; break;
  }
  console.log(bln[1]);
 //output3
 var date=par[3].split('/');
 date.sort(function(a, b){return b-a})
 console.log(date);
 //output4
 var date2=par[3].split('/');
 
 console.log(date2.join('-'));
 //output5
 var name='';
  name=par[1].slice(0,15);
  console.log(name);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */