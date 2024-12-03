const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Adjusts the Jest setup to the root directory
});

module.exports = createJestConfig({
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ensures custom matchers are loaded
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps `@/` alias to `src/`
  },
});
