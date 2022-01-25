
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) { return []; }
  return matrix.map((row, i) => (i % 2 == 0) ? row : row.reverse()).flat();
}
