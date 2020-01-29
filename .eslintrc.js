module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['prettier', 'prettier/@typescript-eslint'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 140,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'avoid',
      },
      {
        usePrettierrc: false,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    strict: 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
};
