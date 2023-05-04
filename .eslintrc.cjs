module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    quotes: ['error', 'single'],
    // we want to force semicolons
    indent: ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
  },
}
