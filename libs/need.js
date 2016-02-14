var path = require('path');

module.exports = function() {
  global.need = function(name) {
    return require(path.join(process.cwd(), name));
  };
}();
