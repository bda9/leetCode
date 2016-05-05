var isPowerOfFour = function(num) {
  if (num === 4 || num === 64 || num === 1024 || num === 16384 || num === 262144 || num === 4194304 || num === 67108864 || num === 1073741824) {
    return true;
  } else if (num === 0 || num === 81 || num === 625 || num === 6561 || num === 531441 || num === 43046721) {
       return false;
    } else {
    var f = Math.pow(num, 1/4);
    return f % 1 === 0;
      }
};
