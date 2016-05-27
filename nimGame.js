/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if (n%4 === 0 && n>3)
      return false;
  else return true;
};
