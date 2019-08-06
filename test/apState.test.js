const apState = require('../apState');

const postal = apState.postal;
const text = apState.text;

test('convert postal to short WaPo style', () => {
  // Test lower case postal
  expect(postal('wv')).toBe('W.Va.');

  // test postal with dots
  expect(postal('N.D.')).toBe('N.D.');

  // Test upper case
  expect(postal('FL')).toBe('Fla.');

  // test with underscore
  expect(postal('N_D')).toBe('N.D.');
});

test('convert text to short WaPo style', () => {
  // Test lower case postal
  expect(text('West Virginia')).toBe('W.Va.');

  // test text with varying capitalization
  expect(text('NOrth DakOta')).toBe('N.D.');

  // test lowercase with underscore
  expect(text('new_york')).toBe('N.Y.');

  // test with underscore
  expect(text('north dakota')).toBe('N.D.');
});
