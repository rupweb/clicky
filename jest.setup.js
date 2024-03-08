require('@testing-library/jest-dom');
require('whatwg-fetch');

module.exports = {
    // Define the test files pattern
    testMatch: [
      "**/tests/**/*.js",
      "!**/tests/playwright/**/*.js", // Excludes the playwright directory
    ],
    // Alternatively, you can use testRegex to define the pattern
    // testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.js$',
  
    // Exclude specific paths
    testPathIgnorePatterns: [
      "/node_modules/",
      "/tests/playwright/", // Exclude the playwright tests
    ],
  
    // Rest of your Jest configuration...
  };
  