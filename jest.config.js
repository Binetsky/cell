module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  transform: {},
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  moduleDirectories: [
    ".",
  ],
  testPathIgnorePatterns: [
    'cypress',
    'node_modules'
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: false,
      tsConfig: {
        target: 'es5',
        module: 'commonjs',
        moduleResolution: 'node',
        allowJs: true,
        esModuleInterop: true,
      },
    }
  }
};

