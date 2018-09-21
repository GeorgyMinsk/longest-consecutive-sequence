module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var min_number=array[0];
  var ConsecutiveLength=1,Max_Length=1;
  for (let i = 1; i < array.length; i++) {

    if(array[i] < min_number){
      min_number=array[i];
      array[i-1]=array[i]
    }
  }
  for (let i = 0; i < array.length-1; i++) {
    if(array[i]+1 == array[i+1]){
      ConsecutiveLength++;
    }
    else{
      if (Max_Length<ConsecutiveLength) {
        Max_Length=ConsecutiveLength;
      }
      ConsecutiveLength=1;
    }
  }
  // if(Max_Length==1){
  //   Max_Length=0;
  // }
  return Max_Length;
}
