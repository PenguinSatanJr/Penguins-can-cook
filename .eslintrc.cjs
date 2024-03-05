module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

  },
};
