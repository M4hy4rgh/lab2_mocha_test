var assert = require("assert");
var calculator = require("../app/calculator");

describe("Calculator Tests", function () {
  describe("Addition Tests", function () {
    it("returns 1 + 1 = 2", function (done) {
      assert.equal(calculator.add(1, 1), 2);
      done();
    });
    //  fail test
    it("returns 1 + 1 = 3 => FAILS", function (done) {
      assert.equal(calculator.add(1, 1), 3);
      done();
    });
  });

  describe("Multiplication Tests", function () {
    it("returns 2 * 2 = 4", function (done) {
      assert.equal(calculator.mul(2, 2), 4);
      done();
    });
    //   fail test
    it("returns 2 * 2 = 5 => FAILS", function (done) {
      assert.equal(calculator.mul(2, 2), 5);
      done();
    });
  });

  describe("Division Tests", function () {
    it("returns 4 / 2 = 2", function (done) {
      assert.equal(calculator.div(4, 2), 2);
      done();
    });
    //   fail test
    it("returns 4 / 2 = 3 => FAILS", function (done) {
      assert.equal(calculator.div(4, 2), 3);
      done();
    });
  });

  describe("Subtraction Tests", function () {
    it("returns 4 - 2 = 2", function (done) {
      assert.equal(calculator.sub(4, 2), 2);

      done();
    });
    //   fail test
    it("returns 4 - 2 = 3 => FAILS", function (done) {
      assert.equal(calculator.sub(4, 2), 3);
      done();
    });
  });
});
