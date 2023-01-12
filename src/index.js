module.exports = function reverse (n) {
  const result = Math.abs(n).toString().split("").reverse().join("");
  return Number(result);
}
