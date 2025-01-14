const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'], // Inclui 'src' como diretório base
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Garante o suporte para arquivos TS e JSX
  },
};

module.exports = createJestConfig(customJestConfig);
