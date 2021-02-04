module.exports = {
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  testEnvironment: 'node',
  testMatch: [ '**/*.test.ts' ],
  testRunner: 'jest-circus/runner',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.[tj]sx?$',
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  }
}
