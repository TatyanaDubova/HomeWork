function task2(){
  for (var a = 2; a <= 100; a++) {
    
    var isSimple = true;
    for (var b = 2; b < a; b++) {
      if (a % b === 0) {
        isSimple = false;
        break;
      } 
    } 
      
    if (isSimple === true) {
      console.log( a ); // простое
    }
  }
      
 }
task2();