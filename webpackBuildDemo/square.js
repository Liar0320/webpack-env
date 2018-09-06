module.exports = function (_parmas, _square) {
  var normal = _parmas;
  for (var i = 0; i < _square - 1; i++) {
    normal = normal * _parmas;
  }
  return normal;
};
