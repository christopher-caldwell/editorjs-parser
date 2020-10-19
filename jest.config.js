module.exports = {
  transform: {
    '^.+.ts?$': 'ts-jest',
  },
  testMatch: ['**/*.spec.(js|ts)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'json'],
  coverageReporters: ['json-summary', 'text'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '<rootDir>/index.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/', '<rootDir>/dist/'],
  testEnvironment: 'node',
}
