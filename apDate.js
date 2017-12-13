const apMonthsList = [
  "Jan.",
  "Feb.",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec."
];

const getDateObjects = function(date) {
    const dateObj = new Date(Date.parse(date));
    const day = dateObj.getUTCDate();
    const month = apMonthsList[dateObj.getUTCMonth()];
    const year = dateObj.getFullYear();
    return {
      "day": day,
      "month": month,
      "year": year,
    }
};

const shortDate = function(date) {
  const obj = getDateObjects(date);
  const month = obj.month;
  const day = obj.day;
  return month + " " + day;
};

const longDate = function(date) {
  const obj = getDateObjects(date);
  const day = obj.day;
  const month = obj.month;
  const year = obj.year;
  return month + " " + day + ", " + year;
};

module.exports = {
  "short": shortDate,
  "long": longDate
};
