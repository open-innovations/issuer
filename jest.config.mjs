export default {
  // testMatch: ['<rootDir>/src/**/*.test.js'],
  collectCoverageFrom: ['<rootDir>/src/**'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester',
  },
  moduleFileExtensions: ['js', 'svelte'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.js'],
  testEnvironment: 'jsdom',
};
