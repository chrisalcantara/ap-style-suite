const { text } = require('./states/text.js');
const { postal } = require('./states/postal.js');

function removeSymbolsForPostal(state) {
  return state.replace(/(\.|\_)/g, '').toUpperCase();
}

function removeSymbolsForText(state) {
  return state.replace(/(\.|\_)/g, ' ').toUpperCase();
}

function postalToState(state) {
  var formattedState = removeSymbolsForPostal(state);
  return postal[formattedState];
}

function textToState(state) {
  var formattedState = removeSymbolsForText(state);
  return text[formattedState];
}

module.exports = {
  postal: postalToState,
  text: textToState,
};
