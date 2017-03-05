function task4(){
  
  var arr1 = [1, 3, 6],
      arr2 = [2, 5, 4];
      

   var arraysConcated = arr1.concat(arr2);
  
  console.log(arraysConcated);
   arraysConcated.sort(function(numBla1, numBla2) {
     return numBla1 - numBla2;
   });
  console.log(arraysConcated);

 }


   
task4();
