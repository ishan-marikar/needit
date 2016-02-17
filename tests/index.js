var should = require('should');
require('../index');

//Test subjects
var stuff = need('tests/stuff/stuff.lib')();
var random = need('tests/stuff/deeper/random.lib');

describe('needit', function() {
  it('should return true', function() {
    should(stuff).equal(true);
  });
  it('should return a number', function() {
    should(random.randomNumber(1, 5)).be.a.Number();
  });
});
