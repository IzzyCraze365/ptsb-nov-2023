function computeClosestToZero(ts) {
  // Write your code here
  let closeTemp = 10;
  if (ts.length === 0){
      closeTemp = 0;
  } else {
      for(let i=0; i <= ts.length;i++){
          if(Math.abs(ts[i]) < Math.abs(closeTemp)){
              closeTemp = ts[i]
          }else if (ts[i] === closeTemp){
              closeTemp = ts[i];
          }else if (Math.abs(ts[i]) === Math.abs(closeTemp)){
          closeTemp = Math.abs(ts[i]);
      }
  }

}

  // To debug: console.error('Debug messages...');
  
  return closeTemp;
}

let temps = [7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7]; //Array of temperatures

console.log(`The temperature closest to zero is ${computeClosestToZero(temps)}`);
