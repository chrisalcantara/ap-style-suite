const apMonthsList = [
  'Jan.',
  'Feb.',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.',
];

function formatDate(date) {

  if (date.indexOf('-') != -1) {
    let split = date.split('-');
    if (split[0].length == 4) {
      date = `${split[1]}/${split[2]}/${split[0]}`;
    } else {
      date = `${split[0]}/${split[1]}/${split[2]}`;
    }
  }

  date = new Date(Date.parse(date));
  return date;
}

const getDateObjects = function(date) {
  const dateObj = formatDate(date);
  const day = dateObj.getDate();
  const month = apMonthsList[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return {
    day: day,
    month: month,
    year: year,
  };
};

const shortDate = function(date) {
  const obj = getDateObjects(date);
  const month = obj.month;
  const day = obj.day;

  return month + ' ' + day;
};

const longDate = function(date) {
  const obj = getDateObjects(date);
  const day = obj.day;
  const month = obj.month;
  const year = obj.year;

  return month + ' ' + day + ', ' + year;
};

module.exports = {
  short: shortDate,
  long: longDate,
};
