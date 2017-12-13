const chai = require("chai");
const should = chai.should();
const convert = require("../index");

const shortAP = convert.shortAP;
const longAP = convert.longAP;


test("convert date to short AP Style", () => {
  expect(shortAP("2016-12-25")).toBe('Dec. 25');
  expect(shortAP('12/25/16')).toBe('Dec. 25');
  expect(shortAP('December 25, 2016')).toBe('Dec. 25');
  expect(shortAP('Dec. 25, 2016')).toBe('Dec. 25');
});

test("convert date to long AP Style", () => {
  expect(longAP("2016-12-25")).toBe('Dec. 25, 2016');
  expect(longAP('12/25/16')).toBe('Dec. 25, 2016');
  expect(longAP('December 25, 2016')).toBe('Dec. 25, 2016');
  expect(longAP('Dec. 25, 2016')).toBe('Dec. 25, 2016');
});


