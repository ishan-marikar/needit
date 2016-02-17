module.exports.randomNumber = function(maximum, minimum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};
