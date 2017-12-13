const apNumber = require("../apNumber");

const apFormatNumber = apNumber.format;
const apFormatSmallNumber = apNumber.smallNumber;
const apFormatLargeNumber = apNumber.largeNumber;

test("convert small number to text", () => {
  expect(formatSmallNumber(9)).toBe('nine');
  expect(formatSmallNumber('9')).toBe('nine')
});

test("convert large numbers to text", () => {
  expect(formatLargeNumber(90000)).toBe('90,000');
  expect(formatLargeNumber('90000')).toBe('90,000');
});

test("convert any number to formatted text", () => {
  expect(formatNumber(10)).toBe('10');
  expect(formatNumber(1000)).toBe('1,000');
  expect(formatNumber('10,000')).toBe('10,000');
  expect(formatNumber(100000)).toBe('100,000');
  expect(formatNumber('1,000,000')).toBe('1 million');
  expect(formatNumber(1000000)).toBe('1 million');
});


