function task3(){
  
  var number = 1;
  var numberEnd = 100;
  var totalSum = 0;
  
  for (var a = number; a <= numberEnd; a++){
    totalSum +=a;
    
  }
  console.log ("Sum by approach #1 = " + totalSum)
  
  var pairSum = number + numberEnd;
  var numberOfPair = numberEnd/2;
  totalSum = numberOfPair*pairSum;
  console.log ("Sum by approach #2 = " + totalSum)
 }
   
task3();