module.exports = function (limitR) {
  limitR = limitR || 10;
  var random = Math.random;
  var len = String(limitR).length;
  var digit = 1;
  for (var i = 0; i < len; i++) {
    digit = 10 * digit;
  }
  var result;
  var count = 0;
  while (result === undefined && count < 100) {
    var counts = parseInt(random() * digit);
    if (counts < limitR) result = counts;
    count++;
  }
  random = null;
  return count === 100 ? 0 : result;
};
