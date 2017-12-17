const apDate = require("../apDate");

const shortAP = apDate.short;
const longAP = apDate.long;

test("convert date to short AP Style", () => {

  // Test using YYYY-MM-DD format
  expect(shortAP("2016-12-25")).toBe('Dec. 25');

  // Test using MM/DD/YYYY format.
  expect(shortAP('12/25/2016')).toBe('Dec. 25');

  // Test using written out date
  expect(shortAP('December 25, 2016')).toBe('Dec. 25');

  // Test short month
  expect(shortAP('Dec. 25, 2016')).toBe('Dec. 25');

});

test("convert date to long AP Style", () => {

  // Test using YYYY-MM-DD format
  expect(longAP("2016-12-25")).toBe('Dec. 25, 2016');

  // Test using MM/DD/YYYY format.
  expect(longAP('12/25/2016')).toBe('Dec. 25, 2016');

  // Test using written out date
  expect(longAP('December 25, 2016')).toBe('Dec. 25, 2016');

  // Test short month
  expect(longAP('Dec. 25, 2016')).toBe('Dec. 25, 2016');

});
