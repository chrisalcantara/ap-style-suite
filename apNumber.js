const isString = function(number) { return typeof(number) === 'string' };
const isNumber = function(number) { return typeof(number) === 'integer' };
const hasCommas = function( number ) { return (number.indexOf(',') > -1) };

const addCommas = function(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const removeCommas = function(numberString) {
  const numberWithoutComma = numberString.replace(/[^\d\.\-\ ]/g, '');
  return numberWithoutComma;
};

const checkCommas = function(number) {
  const checkedNumber = (isString(number) && hasCommas(number)) ? removeCommas(number) : number;
  return checkedNumber;
};

const formatNumber = function(number) {
  const checkedNumber = (isString(number)) ? checkCommas(number) : number;
  const parsedNumber = parseFloat(checkedNumber);
  return parsedNumber;
};

const getLeadingNumber = function(number) {
  const getSplitNumber = (isString(number) && hasCommas(number)) ? number.split(',')[0] : addCommas(number).split(',')[0]
  return getSplitNumber;
};

const checkRange = function(num, range) {
  const parsedNumber = formatNumber(num);
  const lowNumber = range[0];
  const highNumber = range[1];
  return parsedNumber > lowNumber && parsedNumber <= highNumber;
};

const isMillions = function(num) {
  return checkRange(num, [999999, 999999999])
};

const isBillions = function(num) {
  return checkRange(num, [999999999, 999999999999])
};

const isTrillions = function(num) {
  return checkRange(num, [999999999999, 999999999999999])
};

// This function writes out large numbers
const formatLargeNumber = function(num) {
  if (isMillions(num)) {
    return getLeadingNumber(num) + ' million';
  } else if (isBillions(num)) {
    return getLeadingNumber(num) + ' billion';
  } else if (isTrillions(num)) {
    return getLeadingNumber(num) + ' trillion';
  } else {
    return addCommas(num);
  }
};

const numberWordKey = {
  '0': "zero",
  "1": "one",
  '2': "two",
  '3': "three",
  '4': "four",
  '5': "five",
  '6': "six",
  '7': "seven",
  '8': "eight",
  '9': "nine",
};

const formatSmallNumber = function(num) {
  const stringNumber = (isString(num)) ? num : num.toString();
  const numberString = numberWordKey[stringNumber];
  if (numberString != undefined) {
    return numberString;
  } else {
    return Error('Number needs tobe less than 10')
  }
};

const format = function(number) {
  const theNumber = formatNumber(number);
  if (theNumber < 10) {
    return formatSmallNumber(number);
  } else if (theNumber > 999999) {
    return formatLargeNumber(number);
  } else {
    return addCommas(number);
  }
};

module.exports = {
  "formatNumber": format,
  "formatSmallNumber": formatSmallNumber,
  "formatLargeNumber": formatLargeNumber
};
