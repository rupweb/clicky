import helloWorld from '../src/js/javascript.js';

describe('string tests', () => {
  test('check string', () => {
    expect(helloWorld()).toBe("Hello world!");
  });
});