const apNumber = require("../apNumber");

const apFormatNumber = apNumber.formatNumber;
const apFormatSmallNumber = apNumber.formatSmallNumber;
const apFormatLargeNumber = apNumber.formatLargeNumber;

test("convert small number to text", () => {
  expect(apFormatSmallNumber(9)).toBe('nine');
  expect(apFormatSmallNumber('9')).toBe('nine')
});

test("convert large numbers to text", () => {
  expect(apFormatLargeNumber(90000)).toBe('90,000');
  expect(apFormatLargeNumber('90000')).toBe('90,000');
});

test("convert any number to formatted text", () => {
  expect(apFormatNumber(10)).toBe('10');
  expect(apFormatNumber(1000)).toBe('1,000');
  expect(apFormatNumber('10,000')).toBe('10,000');
  expect(apFormatNumber(100000)).toBe('100,000');
  expect(apFormatNumber('1,000,000')).toBe('1 million');
  expect(apFormatNumber(1000000)).toBe('1 million');
});


