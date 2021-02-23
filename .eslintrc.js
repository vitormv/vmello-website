module.exports = {
  extends: ['airbnb'],
  plugins: ['react'],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'import/no-cycle': 'warn',
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'parent', 'internal', 'object', 'sibling', 'index'] },
    ],
    'import/prefer-default-export': 'off',
    'max-len': ['warn', { code: 120, ignoreComments: true, ignoreUrls: true }],
    'no-param-reassign': 'error',
    'no-console': 'error',
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: { consistent: true },
        ObjectPattern: { minProperties: 5 },
      },
    ],
    'prefer-destructuring': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 3,
      },
    ],
    'react/destructuring-assignment': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
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
    'react/prop-types': 'warn',
  },
  ignorePatterns: ['/node_modules/', '/.next', '/out'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  overrides: [
    {
      files: ['cli/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
