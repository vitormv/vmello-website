module.exports = {
  extends: [
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'tailwindcss'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    ga: 'readonly',
  },
  ignorePatterns: ['/out/', '/node_modules/', '/.next/'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:@next/next/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:prettier/recommended',
      ],
      files: ['./**/*.ts', './**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          node: {
            paths: ['./'],
            extensions: ['.ts', '.tsx'],
          },
        },
      },
      rules: {
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'no-multi-spaces': 'error',
        '@next/next/no-html-link-for-pages': 'off',
        'import/extensions': 'off',
        'no-continue': 'off',
        'no-shadow': 'off',
        'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-wrap-multilines': [
          'error',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'ignore',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
          },
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
    {
      files: ['./cli/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
      },
    },
  ],
};
