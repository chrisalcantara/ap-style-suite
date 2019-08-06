const { text } = require('./states/text.js');
const { postal } = require('./states/postal.js');

function postalToState(state) {
  return postal[state.toUpperCase()];
}

function textToState(state) {
  return text[state.toUpperCase()];
}

module.exports = {
  postal: postalToState,
  text: textToState,
};
